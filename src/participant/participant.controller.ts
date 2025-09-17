import { Controller, Get, Param, Put, Query } from '@nestjs/common';
import { PaginationQueryDto } from './dto/pagination.dto';
import { ParticipantService } from './participant.service';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Get('race-pack')
  findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    return this.participantService.getRacePackParticipant(paginationQueryDto);
  }

  @Put('race-pack/:id')
  update(@Param('id') id: number) {
    return this.participantService.updateRacePackStatus(id);
  }

  @Put('registration/:id')
  updateRegistration(@Param('id') id: string) {
    return this.participantService.updateParticipantRegistrationStatus(+id);
  }
  
  @Get('registration')
  findAllRegistration(@Query() paginationQueryDto: PaginationQueryDto) {
    return this.participantService.getRegistrationParticipant(paginationQueryDto);
  }

}
