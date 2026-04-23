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
        status: createCategoryDto.status ? +createCategoryDto.status : 1,
      },
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
    const existingCategory =
      await this.prismaService.master_category.findUnique({
        where: {
          id: id,
        },
      });
    if (!existingCategory) {
      throw new Error('Category not found');
    }
    return await this.prismaService.master_category.update({
      where: {
        id: id,
      },
      data: {
        ...updateCategoryDto,
        status: updateCategoryDto.status
          ? +updateCategoryDto.status
          : existingCategory.status,
      },
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
