import { IsDateString, IsEmail, IsString } from "class-validator";

export class CreateParticipantDto {
    @IsString()
    fname: string;

    @IsString()
    lname: string;

    @IsString()
    bibname: string;

    @IsEmail()
    email: string;

    @IsString()
    identityId: string;

    @IsString()
    birthplace: string;

    @IsDateString()
    birthdate: string;

    @IsString()
    phone: string;

    @IsString()
    address: string;

    @IsString()
    zipcode: string;

    @IsString()
    country: string;

    @IsString()
    city: string;

    @IsString()
    bloodType: string;

    @IsString()
    category: number;

    @IsString()
    size: string;

    @IsString()
    gender: string;

    @IsString()
    province: string;

    @IsString()
    price: string;

    @IsString()
    condition: string;
}