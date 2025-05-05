import { Controller, Post, Body, UnauthorizedException, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginUserSchema } from 'src/modules/user/dto/login-user.dto';
import { Public } from 'src/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }


  @Public()
  @Post('register')
  async register(@Body() userData: CreateUserDto) {
    return this.authService.register(userData);
  }
  @Public()
  @Post('login')
  async login(@Body() loginData: any) {
    const { error } = LoginUserSchema.validate(loginData);
    if (error) throw new UnauthorizedException(error.message);

    const user = await this.authService.validateUser(loginData.email, loginData.password);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return this.authService.login(user);
  }
}