import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { users } from 'generated/prisma';
import { CurrentUser } from 'src/current-user/current-user.decorator';
import { AuthWithRoles } from './auth.decorator';
import { AuthService } from './auth.service';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() LoginDto: LoginDto) {
    return this.authService.login(LoginDto);
  }

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('logout')
  @AuthWithRoles()
  logout(@CurrentUser() user: users) {
    return this.authService.logout(user);
  }

  @Put('change-password')
  @AuthWithRoles()
  changePassword(
    @CurrentUser() user: users,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    return this.authService.changePassword(user, changePasswordDto);
  }

  @Get(':id')
  // @AuthWithRoles()
  getMe(@Param('id') id: string) {
    return this.authService.getUserById(+id);
  }

  @Patch('reset-password/:id')
  @AuthWithRoles()
  resetPassword(
    @Param('id') id: string,
  ) {
    return this.authService.resetPassword(+id);
  }
}
