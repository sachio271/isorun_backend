import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync, mkdirSync, unlinkSync, writeFileSync } from 'fs';
import { users } from 'generated/prisma';
import { join } from 'path';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private readonly prismaService: PrismaService) {}
  link = 'http://localhost:8000/api/file/';
  linkProd = 'https://isoplusrun.wingssurya.com/apis/file/';
  async create(createTransactionDto: CreateTransactionDto, user: users) {
    const { pt, divisi, emergencyName, emergencyPhone } = createTransactionDto;
    const dataTransaction = {
      pt,
      divisi,
      emergencyName,
      emergencyPhone,
    }

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

    const createdTransaction = await this.prismaService.transactions.findUnique({
      where: { id: transactionId },
    });

    return createdTransaction;
  }

  async createParticipant(createParticipantDto: CreateParticipantDto, id: string) {
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
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }

  async findAll() {
    return await this.prismaService.transactions.findMany({
      include: {
        participants: {
          include: {
            master_category: true,
          },
        },
        users: true,
      },
    });
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
    if (data?.transferProof === null) {
      return {
        ...data,
        transferProof: '-',
      };
    }
    return {
      ...data,
      transferProof:
        this.linkProd +
        data?.transferProof.split('/').pop() ,
    }
  }

  async findByUserId(user: users) {
    const userData = await this.prismaService.users.findUnique({
      where: { id: user.id },
    });
    if(!userData) {
      return new Error('User not found');
    }
    if(!userData.transactionId) {
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
      src:
        this.linkProd +
        data?.transferProof.split('/').pop() ,
    }
  }

  async uploadFile(id: string, file: Express.Multer.File) {
    console.log(file);

    const dataTransaction = await this.prismaService.transactions.findUnique({
      where: { id },
    });

    if (!dataTransaction) {
      throw new Error('Transaction not found');
    }

    const uploadDir = './uploads';
    const extension = file.originalname.split('.').pop();
    const name = `bukti-${dataTransaction.id}.${extension}`;
    const filePath = join(uploadDir, name);

    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir);
    }

    if (existsSync(filePath)) {
      unlinkSync(filePath);
    }

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
    await this.prismaService.transactions.update({
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
}
