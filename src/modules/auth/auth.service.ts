import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/user.service';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) { }
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user.toObject();
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.name, userId: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(userData: any) {
    return this.userService.create(userData);
  }


}
