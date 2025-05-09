import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    EKTP: string;
    @IsString()
    type: string;
    @IsString()
    name: string;
    @IsString()
    birthplace: string;
    @IsString()
    birthdate: string;
    @IsString()
    address: string;
    @IsString()
    subdistrict: string;
    @IsString()
    district: string;
    @IsString()
    city: string;
    @IsString()
    phone: string;
    @IsString()
    email: string;
    @IsString()
    gender: string;
    @IsString()
    weight: number | string;
    @IsString()
    height: number | string;
    @IsString()
    bloodType: string;
    @IsString()
    religion: string;
}
