import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { users } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/loginResponse.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  generateTokens(user: users): Promise<[string]> {
    const payload = { id: user.id, role: user.role };
    return Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('ACCESS_TOKEN_KEY'),
        expiresIn: this.configService.get<string>('ACCESS_TOKEN_EXPIRE'),
      }),
    ]);
  }

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    console.log('loginDto', loginDto);
    const user = await this.prismaService.users.findFirst({
      where: { users_refId: loginDto.username },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const [accessToken] = await this.generateTokens(user);
    const expiresIn =
      this.configService.get<string>('ACCESS_TOKEN_EXPIRE') || '3600';

    return { accessToken, expiresIn, user };
  }

  async register(registerDto: RegisterDto): Promise<users> {
    console.log('registerDto', registerDto);

    const checkUser = await this.prismaService.users_ref.findFirst({
      where: { EKTP: registerDto.ektp },
    });

    if(!checkUser) {
      throw new UnauthorizedException('EKTP not found');
    }

    const existingUser = await this.prismaService.users.findFirst({
      where: { users_refId: registerDto.ektp },
    });

    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }

    const username = 'user' + Math.floor(Math.random() * 1000);

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    if(checkUser.kabag === true) {
      return await this.prismaService.users.create({
        data: {
          name: registerDto.name,
          username: username,
          password: hashedPassword,
          role: 'KABAG',
          status: 0,
          users_refId: checkUser.EKTP,
        },
      });
    }

    return await this.prismaService.users.create({
      data: {
        name: registerDto.name,
        username: username,
        password: hashedPassword,
        role: registerDto.role,
        status: 0,
        users_refId: checkUser.EKTP,
      },
    });
  }

  async logout(CurrentUser: users): Promise<string> {
    return 'Logged out successfully';
  }

  async changePassword(user: users, changePasswordDto: ChangePasswordDto) {
    const userDb = await this.prismaService.users.findFirst({
      where: { id: user.id },
    });

    if (!userDb) {
      throw new UnauthorizedException('User not found');
    }

    const isOldPasswordValid = await bcrypt.compare(
      changePasswordDto.oldPassword,
      userDb.password,
    );
    if (!isOldPasswordValid) {
      throw new UnauthorizedException('Invalid old password');
    }

    const hashedNewPassword = await bcrypt.hash(
      changePasswordDto.newPassword,
      10,
    );

    await this.prismaService.users.update({
      where: { id: user.id },
      data: { password: hashedNewPassword },
    });

    return { message: 'Password changed successfully' };
  }

  async resetPassword(id: number) {
    const user = await this.prismaService.users.findFirst({
      where: { id },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const hashedPassword = await bcrypt.hash('12345678', 10);

    await this.prismaService.users.update({
      where: { id },
      data: { password: hashedPassword },
    });

    return { message: 'Password reset successfully' };
  }

  async getUserById(id: number) {
    const user = await this.prismaService.users.findUnique({
      where: { id },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const userRef = await this.prismaService.users_ref.findUnique({
      where: { EKTP: user.users_refId ?? undefined },
      include: {
        family_ref: true,
      },
    });
    const userResponse: {
      ektp: string;
      type: string;
      name: string;
      birthPlace: string;
      birthDate: Date | string;
      address: string;
      subDistrict: string;
      district: string;
      city: string;
      phone: string;
      email: string;
      gender: string;
      weight: number | string;
      height: number | string;
      bloodType: string;
      religion: string;
      status: string;
    }[] = [];
    if (userRef) {
      const user = {
        ektp: userRef.EKTP ?? '',
        type: userRef.type ?? '',
        name: userRef.name ?? '',
        birthPlace: userRef.birthplace ?? '',
        birthDate: userRef.birthdate ?? '',
        address: userRef.address ?? '',
        subDistrict: userRef.subdistrict ?? '',
        district: userRef.district ?? '',
        city: userRef.city ?? '',
        phone: userRef.phone ?? '',
        email: userRef.email ?? '',
        gender: userRef.gender ?? '',
        weight: userRef.weight ?? '',
        height: userRef.height ?? '',
        bloodType: userRef.bloodType ?? '', 
        religion: userRef.religion ?? '',
        status: 'employee'
      }
      userResponse.push(user)

      if (userRef.family_ref) {
        userRef.family_ref.forEach((family) => {
          const familyData = {
            ektp: family.EKTP ?? '',
            type: family.type ?? '',
            name: family.name ?? '',
            birthPlace: family.birthplace ?? '',
            birthDate: family.birthdate ?? '',
            address: family.address ?? '',
            subDistrict: family.subdistrict ?? '',
            district: family.district ?? '',
            city: family.city ?? '',
            phone: '',
            email: '',
            gender: '',
            weight: '',
            height: '',
            bloodType: '',
            religion: '',
            status: 'family'
          }
          userResponse.push(familyData)
        })
      }
    }
    return userResponse;
  }
}
