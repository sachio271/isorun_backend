import { users } from 'generated/prisma';

export class LoginResponseDto {
  accessToken: string;
  expiresIn: string;
  user: users;
}
