import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dtos/create-user.dto.js';
import { AuthService } from './auth.service.js';
import { SignupDocs } from './decorators/docs/signup.decorator.js';

@Controller()
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @SignupDocs()
  public signup(@Body() body: CreateUserDto) {
    return this.authService.signup(body);
  }
}
