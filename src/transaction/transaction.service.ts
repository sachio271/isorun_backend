import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync, mkdirSync, unlinkSync, writeFileSync } from 'fs';
import { users } from 'generated/prisma';
import { basename, join } from 'path';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private readonly prismaService: PrismaService) {}
  //get from env
  private link = process.env.LINK_PROD || 'http://localhost:3000/';
  async create(createTransactionDto: CreateTransactionDto, user: users) {
    const { pt, divisi, emergencyName, emergencyPhone } = createTransactionDto;
    const dataTransaction = {
      pt,
      divisi,
      emergencyName,
      emergencyPhone,
    };

    const transactionId = 'WINGS-' + this.generateRandomTransactionCode();

    await this.prismaService.users.update({
      where: { id: user.id },
      data: {
        transactions: {
          create: {
            id: transactionId,
            pt,
            divisi,
            emergencyName,
            emergencyPhone,
            total: +createTransactionDto.total,
            status: 1,
          },
        },
      },
    });

    const createdTransaction = await this.prismaService.transactions.findUnique(
      {
        where: { id: transactionId },
      },
    );

    return createdTransaction;
  }

  async createParticipant(
    createParticipantDto: CreateParticipantDto,
    id: string,
  ) {
    const dataTransaction = await this.prismaService.transactions.findUnique({
      where: { id },
    });
    if (!dataTransaction) {
      throw new Error('Transaction not found');
    }
    return await this.prismaService.participants.create({
      data: {
        transactionsId: id,
        fname: createParticipantDto.fname,
        lname: createParticipantDto.lname,
        bibname: createParticipantDto.bibname,
        email: createParticipantDto.email,
        identityId: createParticipantDto.identityId,
        birthplace: createParticipantDto.birthplace,
        birthdate: new Date(createParticipantDto.birthdate),
        phone: createParticipantDto.phone,
        address: createParticipantDto.address,
        zipcode: createParticipantDto.zipcode,
        country: createParticipantDto.country,
        city: createParticipantDto.city,
        bloodType: createParticipantDto.bloodType,
        master_categoryId: +createParticipantDto.category,
        size: createParticipantDto.size,
        gender: createParticipantDto.gender,
        province: createParticipantDto.province,
        price: +createParticipantDto.price,
        condition: createParticipantDto.condition,
      },
    });
  }

  generateRandomTransactionCode(length = 8): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }

  calculateAge(tanggalLahir: string): number {
    const birthDate = new Date(tanggalLahir);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  }

  async findAll() {
    const trans = await this.prismaService.transactions.findMany({
      include: {
        participants: {
          include: {
            master_category: true,
          },
        },
        users: true,
      },
      orderBy: [{ createdAt: 'asc' }, { status: 'asc' }],
    });
    let total_participant = 0;

    const categories: Record<string, { count: number; participants: any[] }> =
      {};
    for (const transaction of trans) {
      for (const participant of transaction.participants) {
        const category = participant.master_category?.name || 'Unknown';

        const enrichedParticipant = {
          ...participant,
          pt: transaction.pt,
          divisi: transaction.divisi,
        };

        if (!categories[category]) {
          categories[category] = {
            count: 0,
            participants: [],
          };
        }

        categories[category].count++;
        categories[category].participants.push(enrichedParticipant);
        total_participant++;
      }
    }

    return {
      trans,
      total_transaction: trans.length,
      total_participant,
      categories,
    };
  }

  async findOne(id: string) {
    const data = await this.prismaService.transactions.findUnique({
      where: { id },
      include: {
        participants: {
          include: {
            master_category: true,
          },
        },
      },
    });
    if (!data) {
      return new BadRequestException('Transaction not found');
    }
    const participantsWithAge = data.participants.map((participant) => ({
      ...participant,
      umur: participant.birthdate
        ? this.calculateAge(participant.birthdate.toString())
        : null,
    }));
    if (data?.transferProof === null) {
      return {
        ...data,
        participants: participantsWithAge,
        transferProof: '-',
      };
    }
    return {
      ...data,
      participants: participantsWithAge,
      transferProof: this.link + basename(data.transferProof),
    };
  }

  async findByUserId(user: users) {
    const userData = await this.prismaService.users.findUnique({
      where: { id: user.id },
    });
    if (!userData) {
      return new Error('User not found');
    }
    if (!userData.transactionId) {
      return new Error('Transaction not found');
    }
    const data = await this.prismaService.transactions.findFirst({
      where: {
        id: userData.transactionId,
        status: { not: -1 },
      },
      include: {
        participants: {
          include: {
            master_category: true,
          },
        },
      },
    });
    if (!data) {
      throw new Error('Transaction not found');
    }
    if (data?.transferProof === null) {
      return {
        ...data,
        src: '-',
      };
    }
    return {
      ...data,
      src: this.link + basename(data.transferProof),
    };
  }

  async uploadFile(id: string, file: Express.Multer.File) {
    const dataTransaction = await this.prismaService.transactions.findUnique({
      where: { id },
    });

    if (!dataTransaction) {
      throw new Error('Transaction not found');
    }

    const uploadDir = './uploads';

    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir);
    }

    // Delete the previously stored file regardless of extension
    if (dataTransaction.transferProof && existsSync(dataTransaction.transferProof)) {
      unlinkSync(dataTransaction.transferProof);
    }

    const extension = file.originalname.split('.').pop();
    const name = `bukti-${dataTransaction.id}.${extension}`;
    const filePath = join(uploadDir, name);

    writeFileSync(filePath, file.buffer);

    return await this.prismaService.transactions.update({
      where: { id },
      data: {
        transferProof: filePath,
        status: 3,
      },
    });
  }

  async updateStatus(id: string, updateStatusDto: UpdateTransactionDto) {
    const dataTransaction = await this.prismaService.transactions.findUnique({
      where: { id },
    });
    if (!dataTransaction) {
      throw new Error('Transaction not found');
    }
    if (updateStatusDto.status === '2' && dataTransaction.total === 0) {
      return await this.prismaService.transactions.update({
        where: { id },
        data: { status: 4 },
      });
    }
    return await this.prismaService.transactions.update({
      where: { id },
      data: { status: +updateStatusDto.status },
    });
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  async remove(id: string) {
    await this.prismaService.participants.deleteMany({
      where: { transactionsId: id },
    });
    return await this.prismaService.transactions.delete({
      where: { id },
    });
  }

  async removeParticipant(id: number) {
    console.log(id);
    const dataParticipant = await this.prismaService.participants.findUnique({
      where: { id },
      include: {
        transactions: true,
      },
    });
    if (!dataParticipant) {
      throw new Error('Participant not found');
    }
    if (!dataParticipant.price) {
      throw new Error('Transaction not found');
    }
    await this.prismaService.transactions.update({
      where: { id: dataParticipant.transactionsId || '' },
      data: {
        total: {
          decrement: +dataParticipant.price,
        },
      },
    });
    return await this.prismaService.participants.delete({
      where: { id },
    });
  }

  async findSettings() {
    return await this.prismaService.settings.findFirst();
  }

  async updateRegistrationSetting(open_registration: number) {
    const settings = await this.prismaService.settings.findFirst();
    if (!settings) {
      throw new Error('Settings not found');
    }
    return await this.prismaService.settings.update({
      where: { id: settings.id },
      data: { OPEN_REGISTRATION: open_registration },
    });
  }
}
