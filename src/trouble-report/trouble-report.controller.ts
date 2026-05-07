import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TroubleReportService } from './trouble-report.service';
import { CreateTroubleReportDto } from './dto/create-trouble-report.dto';
import { PaginationQueryDto } from 'src/participant/dto/pagination.dto';

@Controller('trouble-report')
export class TroubleReportController {
  constructor(private readonly troubleReportService: TroubleReportService) {}

  @Post()
  create(@Body() createTroubleReport: CreateTroubleReportDto) {
    return this.troubleReportService.create(createTroubleReport);
  }

  @Get()
  findAll(@Query() query: PaginationQueryDto) {
    return this.troubleReportService.findAll(query);
  }
}
