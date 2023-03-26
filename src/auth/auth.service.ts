import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateToken(user: any) {
    const payload = { sub: user._id, username: user.username };
    const accessOptions = {
      expiresIn: '3m',
      privateKey: this.configService.get<string>('ACCESS_PRIVATE_KEY'),
    };
    const refreshOptions = {
      expiresIn: '6m',
      privateKey: this.configService.get<string>('REFRESH_PRIVATE_KEY'),
    };

    return {
      access_token: await this.jwtService.signAsync(payload, accessOptions),
      refresh_token: await this.jwtService.signAsync(payload, refreshOptions),
    };
  }

  async validateUser(email: string, password: string) {
    const users = await this.userService.getByFilter({
      email: email,
    });

    if (users.length == 0) return null;

    const user = users[0];

    const isValidPassword = compareSync(password, user.password);

    if (!isValidPassword) return null;

    return user;
  }
}
