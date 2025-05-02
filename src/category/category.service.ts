import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createCategoryDto: CreateCategoryDto) {
    console.log(createCategoryDto);
    return await this.prismaService.master_category.create({
      data: {
        ...createCategoryDto,
        price: parseInt(createCategoryDto.price.toString()),
      }
    });
  }

  async findAll() {
    return await this.prismaService.master_category.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.master_category.findUnique({
      where: {
        id: id,
      },
    });
  }

  async findByType(type: string) {
    return await this.prismaService.master_category.findMany({
      where: {
        type: type,
      },
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.prismaService.master_category.update({
      where: {
        id: id,
      },
      data: updateCategoryDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.master_category.delete({
      where: {
        id: id,
      },
    });
  }
}
