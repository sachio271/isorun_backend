import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFamilyDto } from './dto/create-family.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    return await this.prismaService.users_ref.create({
      data: {
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
      }
    });
  }

  async findAllUserRef() {
    return await this.prismaService.users_ref.findMany({
      include: {
        family_ref: true,
      },
    });
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
    return await this.prismaService.family_ref.create({
      data: createFamilyDto,
    });
  }

  async findAll() {
    return await this.prismaService.users.findMany({
      include: {
        users_ref: true
      },
    });
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
