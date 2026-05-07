import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTroubleReportDto } from './dto/create-trouble-report.dto';
import { PaginationQueryDto } from 'src/user/dto/pagination.dto';
import { Prisma } from 'generated/prisma';

@Injectable()
export class TroubleReportService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createTroubleReportDto: CreateTroubleReportDto) {
    const data = await this.prismaService.troubleReport.create({
      data: {
        title: createTroubleReportDto.title,
        description: createTroubleReportDto.description,
        createdAt: new Date(),
        name: createTroubleReportDto.name,
        wa: createTroubleReportDto.wa,
        email: createTroubleReportDto.email,
        nik: createTroubleReportDto.nik,
      },
    });
    return data;
  }

  async findAll(query: PaginationQueryDto) {
    const { page, limit, search } = query;
    const skip = (page - 1) * limit;
    const take = limit;
    const conditions: Prisma.troubleReportWhereInput[] = [];
    if (search) {
      conditions.push({
        OR: [
          { title: { contains: search } },
          { description: { contains: search } },
          { name: { contains: search } },
          { wa: { contains: search } },
          { email: { contains: search } },
          { nik: { contains: search } },
        ],
      });
    }
    const whereClause: Prisma.troubleReportWhereInput =
      conditions.length > 0 ? { AND: conditions } : {};
    const [totalItems, data] = await this.prismaService.$transaction([
      this.prismaService.troubleReport.count({ where: whereClause }),
      this.prismaService.troubleReport.findMany({
        where: whereClause,
        skip,
        take,
        orderBy: {
          createdAt: 'desc',
        },
      }),
    ]);
    const totalPages = Math.ceil(totalItems / limit);
    return {
      data: data,
      meta: {
        totalItems,
        itemsPerPage: limit,
        totalPages,
        currentPage: page,
      },
    };
  }
}
