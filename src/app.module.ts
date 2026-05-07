import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { TransactionModule } from './transaction/transaction.module';
import { FileModule } from './file/file.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { ParticipantModule } from './participant/participant.module';
import { TroubleReportModule } from './trouble-report/trouble-report.module';

@Module({
  imports: [AuthModule, TransactionModule, FileModule, CategoryModule, UserModule, ParticipantModule, TroubleReportModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
