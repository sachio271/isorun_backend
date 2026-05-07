import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { PaginationQueryDto } from './dto/pagination.dto';

@Injectable()
export class ParticipantService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createParticipantDto: CreateParticipantDto) {
    return 'This action adds a new participant';
  }

  async findAll() {
    return await this.prismaService.participants.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.participants.findUnique({
      where: { id },
    });
  }

  async updateRacePackStatus(id: number) {
    const existingParticipant =
      await this.prismaService.participants.findUnique({
        where: { id },
      });
    if (!existingParticipant) {
      throw new Error('Participant not found');
    }
    return await this.prismaService.participants.update({
      where: { id },
      data: {
        racePack: existingParticipant.racePack === true ? false : true,
      },
    });
  }

  async getRacePackParticipant(query: PaginationQueryDto) {
    const { page, limit, search } = query;
    const skip = (page - 1) * limit;
    const take = limit;
    const conditions: Prisma.transactionsWhereInput[] = [];
    if (search) {
      conditions.push({
        OR: [
          { id: { contains: search } },
          { pt: { contains: search } },
          { divisi: { contains: search } },
          { emergencyName: { contains: search } },
          { emergencyPhone: { contains: search } },
          { participants: { some: { fname: { contains: search } } } },
          { participants: { some: { lname: { contains: search } } } },
          { participants: { some: { email: { contains: search } } } },
          { participants: { some: { bibname: { contains: search } } } },
        ],
      });
    }
    conditions.push({
      status: 4,
    });
    const whereClause: Prisma.transactionsWhereInput =
      conditions.length > 0 ? { AND: conditions } : {};
    const [totalItems, data] = await this.prismaService.$transaction([
      this.prismaService.transactions.count({ where: whereClause }),
      this.prismaService.transactions.findMany({
        where: whereClause,
        skip,
        take,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          participants: true,
        },
      }),
    ]);
    const recap: Record<string, { total: number; claimed: number }> = {
      S: { total: 0, claimed: 0 },
      M: { total: 0, claimed: 0 },
      L: { total: 0, claimed: 0 },
      XL: { total: 0, claimed: 0 },
      XXL: { total: 0, claimed: 0 },
    };

    const allData = await this.prismaService.transactions.findMany({
      where: { status: 4 },
      include: {
        participants: true,
      },
    });
    allData.forEach((current) => {
      current.participants.forEach((participant) => {
        const sizeKey = participant.size?.split(' ')[0] || 'Unknown';
        if (!recap[sizeKey]) {
          recap[sizeKey] = { total: 0, claimed: 0 };
        }
        recap[sizeKey].total += 1;
        if (participant.racePack) {
          recap[sizeKey].claimed += 1;
        }
      });
    });

    const totalPages = Math.ceil(totalItems / limit);
    return {
      data: data,
      recap: recap,
      meta: {
        totalItems,
        itemsPerPage: limit,
        totalPages,
        currentPage: page,
      },
    };
  }

  async getRegistrationParticipant(query: PaginationQueryDto) {
    const { page, limit, search } = query;
    const skip = (page - 1) * limit;
    const take = limit;
    const conditions: Prisma.transactionsWhereInput[] = [];
    if (search) {
      conditions.push({
        OR: [
          { id: { contains: search } },
          { pt: { contains: search } },
          { divisi: { contains: search } },
          { emergencyName: { contains: search } },
          { emergencyPhone: { contains: search } },
          { participants: { some: { fname: { contains: search } } } },
          { participants: { some: { uuid: { contains: search } } } },
          { participants: { some: { lname: { contains: search } } } },
          { participants: { some: { email: { contains: search } } } },
          { participants: { some: { bibname: { contains: search } } } },
        ],
      });
    }
    conditions.push({
      status: 4,
    });
    const whereClause: Prisma.transactionsWhereInput =
      conditions.length > 0 ? { AND: conditions } : {};
    const [totalItems, data] = await this.prismaService.$transaction([
      this.prismaService.transactions.count({ where: whereClause }),
      this.prismaService.transactions.findMany({
        where: whereClause,
        skip,
        take,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          participants: {
            include: {
              master_category: true,
            },
          },
        },
      }),
    ]);
    const category = await this.prismaService.master_category.findMany();
    const recap: Record<string, { total: number; present: number }> =
      category.reduce(
        (acc, cat) => {
          acc[cat.name] = { total: 0, present: 0 };
          return acc;
        },
        {} as Record<string, { total: number; present: number }>,
      );

    const allData = await this.prismaService.transactions.findMany({
      include: {
        participants: {
          include: {
            master_category: true,
          },
        },
      },
      where: { status: 4 },
    });
    allData.forEach((transaction) => {
      transaction.participants.forEach((participant) => {
        const categoryKey = participant.master_category?.name || 'Unknown';
        if (recap[categoryKey]) {
          recap[categoryKey].total += 1;
          if (participant.registration) {
            recap[categoryKey].present += 1;
          }
        }
      });
    });

    const totalPages = Math.ceil(totalItems / limit);
    return {
      data: data,
      recap: recap,
      meta: {
        totalItems,
        itemsPerPage: limit,
        totalPages,
        currentPage: page,
      },
    };
  }

  async updateParticipantRegistrationStatus(id: string) {
    const updatedParticipants = await this.prismaService.participants.update({
      where: {
        uuid: id,
      },
      data: {
        registration: true,
      },
    });
    return updatedParticipants;
  }

  async setFreeParticipant(id: string) {
    const existingParticipant =
      await this.prismaService.participants.findUnique({
        where: { id: +id },
        include: {
          transactions: true,
        },
      });
    if (!existingParticipant) {
      throw new Error('Participant not found');
    }
    const updatedParticipants = await this.prismaService.participants.update({
      where: {
        id: +id,
      },
      data: {
        price: 0,
      },
    });
    await this.prismaService.transactions.update({
      where: { id: existingParticipant.transactionsId || '' },
      data: {
        total: {
          decrement: existingParticipant.price || 0,
        },
      },
    });
    return updatedParticipants;
  }
}
