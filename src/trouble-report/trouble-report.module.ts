import { Module } from '@nestjs/common';
import { TroubleReportService } from './trouble-report.service';
import { TroubleReportController } from './trouble-report.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TroubleReportController],
  providers: [TroubleReportService, PrismaService],
})
export class TroubleReportModule {}
