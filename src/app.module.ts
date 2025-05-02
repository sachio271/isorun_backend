import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { TransactionModule } from './transaction/transaction.module';
import { FileModule } from './file/file.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [AuthModule, TransactionModule, FileModule, CategoryModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
