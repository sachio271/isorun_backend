import { IsString } from "class-validator";

export class CreateFamilyDto {
    @IsString()
    users_refEktp: string;

    @IsString()
    name: string;

    @IsString()
    ektp: string;

    @IsString()
    type: string;   
    
    @IsString()
    relation: string;
    
    @IsString()
    birthdate: string;

    @IsString()
    birthplace: string;

    @IsString()
    address: string;

    @IsString()
    subDistrict: string;

    @IsString()
    district: string;

    @IsString()
    city: string;
    
    @IsString()
    phone: string;
    
    @IsString()
    email: string;
}
