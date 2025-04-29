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
      where: { username: loginDto.username },
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
    const existingUser = await this.prismaService.users.findFirst({
      where: { username: registerDto.username },
    });

    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    return await this.prismaService.users.create({
      data: {
        name: registerDto.name,
        username: registerDto.username,
        password: hashedPassword,
        role: registerDto.role,
        status: 0,
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
}
