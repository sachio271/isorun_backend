import { IsNumber, IsString } from "class-validator";

export class CreateTransactionDto {

    @IsString()
    pt: string;

    @IsString()
    divisi: string;

    @IsString()
    emergencyName: string;

    @IsString()
    emergencyPhone: string;

    @IsString()
    total: string;
}
