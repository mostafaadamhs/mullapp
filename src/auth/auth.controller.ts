import { AuthService } from './auth.service';
import { Controller, Get, Req, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authServ: AuthService) {}

  @Post()
  check(@Body() body: any) {
    const result = this.authServ.chechUsernamePassword(
      body.userName,
      body.password,
    );
    return result;
  }

  @Post('login')
  async login(@Body() body: any) {
    const result = await this.authServ.login(body.email, body.password);

    return result; //result.map(m => m.data['username']);
  }
}
