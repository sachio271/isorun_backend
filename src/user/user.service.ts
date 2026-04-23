import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFamilyDto } from './dto/create-family.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationQueryDto } from './dto/pagination.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    return await this.prismaService.users_ref.upsert({
      where: { EKTP: createUserDto.EKTP },
      create: {
        EKTP: createUserDto.EKTP,
        type: createUserDto.type,
        name: createUserDto.name,
        birthplace: createUserDto.birthplace,
        birthdate: new Date(createUserDto.birthdate),
        address: createUserDto.address,
        subdistrict: createUserDto.subdistrict,
        district: createUserDto.district,
        city: createUserDto.city,
        phone: createUserDto.phone,
        email: createUserDto.email,
        gender: createUserDto.gender,
        weight: +createUserDto.weight,
        height: +createUserDto.height,
        bloodType: createUserDto.bloodType,
        religion: createUserDto.religion,
      },
      update: {
        type: createUserDto.type,
        name: createUserDto.name,
        birthplace: createUserDto.birthplace,
        birthdate: new Date(createUserDto.birthdate),
        address: createUserDto.address,
        subdistrict: createUserDto.subdistrict,
        district: createUserDto.district,
        city: createUserDto.city,
        phone: createUserDto.phone,
        email: createUserDto.email,
        gender: createUserDto.gender,
        weight: +createUserDto.weight,
        height: +createUserDto.height,
        bloodType: createUserDto.bloodType,
        religion: createUserDto.religion,
      },
    });
  }

  async findAllUserRef(query: PaginationQueryDto) {
    const { page, limit, search } = query;
    const skip = (page - 1) * limit;
    const whereClause: Prisma.users_refWhereInput = search
      ? {
          OR: [
            { EKTP: { contains: search } },
            { name: { contains: search } },
            { phone: { contains: search } },
            { email: { contains: search } },
            { city: { contains: search } },
            { company: { contains: search } },
            { type: { contains: search } },
          ],
        }
      : {};

    const [totalItems, data] = await this.prismaService.$transaction([
      this.prismaService.users_ref.count({ where: whereClause }),
      this.prismaService.users_ref.findMany({
        where: whereClause,
        skip,
        take: limit,
        orderBy: { name: 'asc' },
        include: { family_ref: true },
      }),
    ]);

    return {
      data,
      meta: {
        totalItems,
        itemsPerPage: limit,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: page,
      },
    };
  }

  async findUserRefById(id: string) {
    return await this.prismaService.users_ref.findUnique({
      where: { EKTP: id },
      include: {
        family_ref: true,
      },
    });
  }

  async createFamily(createFamilyDto: CreateFamilyDto) {
    return await this.prismaService.family_ref.upsert({
      where: { EKTP: createFamilyDto.ektp },
      create: {
        users_refKtp: createFamilyDto.users_refKtp,
        name: createFamilyDto.name,
        EKTP: createFamilyDto.ektp,
        type: createFamilyDto.type,
        relation: createFamilyDto.relation,
        birthplace: createFamilyDto.birthplace,
        birthdate: new Date(createFamilyDto.birthdate),
        address: createFamilyDto.address,
        subdistrict: createFamilyDto.subDistrict,
        district: createFamilyDto.district,
        city: createFamilyDto.city,
        phone: createFamilyDto.phone,
        email: createFamilyDto.email,
      },
      update: {
        users_refKtp: createFamilyDto.users_refKtp,
        name: createFamilyDto.name,
        type: createFamilyDto.type,
        relation: createFamilyDto.relation,
        birthplace: createFamilyDto.birthplace,
        birthdate: new Date(createFamilyDto.birthdate),
        address: createFamilyDto.address,
        subdistrict: createFamilyDto.subDistrict,
        district: createFamilyDto.district,
        city: createFamilyDto.city,
        phone: createFamilyDto.phone,
        email: createFamilyDto.email,
      },
    });
  }

  async findAll(query: PaginationQueryDto) {
    const { page, limit, search } = query;
    const skip = (page - 1) * limit;
    const whereClause: Prisma.usersWhereInput = search
      ? {
          OR: [
            { name: { contains: search } },
            { username: { contains: search } },
            { role: { contains: search } },
            { users_ref: { name: { contains: search } } },
            { users_ref: { email: { contains: search } } },
            { users_ref: { phone: { contains: search } } },
            { users_ref: { EKTP: { contains: search } } },
            { users_ref: { company: { contains: search } } },
          ],
        }
      : {};

    const [totalItems, data] = await this.prismaService.$transaction([
      this.prismaService.users.count({ where: whereClause }),
      this.prismaService.users.findMany({
        where: whereClause,
        skip,
        take: limit,
        orderBy: { name: 'asc' },
        include: { users_ref: true },
      }),
    ]);

    return {
      data,
      meta: {
        totalItems,
        itemsPerPage: limit,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: page,
      },
    };
  }

  async findOne(id: number) {
    return await this.prismaService.users.findUnique({
      where: { id },
      include: {
        users_ref: {
          include: {
            family_ref: true,
          },
        },
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
