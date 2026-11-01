import { Injectable } from '@nestjs/common';
import { CreateUserProvider } from '../users/providers/create-user.provider.js';
import { CreateUserDto } from '../users/dtos/create-user.dto.js';

@Injectable()
export class AuthService {
  constructor(private readonly createUserProvider: CreateUserProvider) {}

  public signup(data: CreateUserDto) {
    return this.createUserProvider.register(data);
  }
}
