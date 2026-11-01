import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserModel } from '../models/users.model.js';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '../users.service.js';
import { CreateUserDto } from '../dtos/create-user.dto.js';
import { HashingProvider } from '../../auth/providers/hashing.provider.js';

@Injectable()
export class CreateUserProvider {
  constructor(
    @InjectRepository(UserModel)
    private readonly userModel: Repository<UserModel>,

    private readonly userService: UsersService,

    private readonly hashingProvider: HashingProvider,
  ) {}

  async register(data: CreateUserDto) {
    const email = data.email.trim().toLowerCase();
    const users = await this.userService.findUsers({ email });

    if (users.length > 0) {
      throw new ConflictException('This email already exists.');
    }

    const newUser = this.userModel.create({
      email,
      password: await this.hashingProvider.hash(data.password),
    });

    try {
      return await this.userModel.save(newUser);
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
