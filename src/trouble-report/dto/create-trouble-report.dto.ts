import { IsNotEmpty } from 'class-validator';

export class CreateTroubleReportDto {
  @IsNotEmpty()
  name!: string;
  @IsNotEmpty()
  wa!: string;
  @IsNotEmpty()
  email!: string;
  @IsNotEmpty()
  nik!: string;
  @IsNotEmpty()
  title!: string;
  @IsNotEmpty()
  description!: string;
}
