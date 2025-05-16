import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { users } from 'generated/prisma';
import { AuthWithRoles } from 'src/auth/auth.decorator';
import { CurrentUser } from 'src/current-user/current-user.decorator';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionService } from './transaction.service';

@AuthWithRoles()
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto, @CurrentUser() user: users) {
    return this.transactionService.create(createTransactionDto, user);
  }

  @Post('participant/:id')
  createParticipant(@Body() createParticipantDto: CreateParticipantDto, @Param('id') id: string) {  
    return this.transactionService.createParticipant(createParticipantDto, id);
  }

  @Get()
  findAll() {
    return this.transactionService.findAll();
  }

  @Get('user')
  findAllByUser(@CurrentUser() user: users) {
    return this.transactionService.findByUserId(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionService.findOne(id);
  }

  @Post(':id')
  @UseInterceptors(FileInterceptor('src'))
  upload(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.transactionService.uploadFile(id, file);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionService.remove(id);
  }

  @Patch('status/:id')
  updateStatus(@Param('id') id: string, @Body() updateStatusDto: UpdateTransactionDto) {
    return this.transactionService.updateStatus(id, updateStatusDto);
  }

  @Delete('participant/user/:id')
  removeParticipant(@Param('id') id: string) {
    return this.transactionService.removeParticipant(+id);
  }
}
