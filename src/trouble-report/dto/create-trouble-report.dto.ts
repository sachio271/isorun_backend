import { IsNotEmpty } from 'class-validator';

export class CreateTroubleReportDto {
  @IsNotEmpty()
  participantId!: string;
  @IsNotEmpty()
  title!: string;
  @IsNotEmpty()
  description!: string;
}
