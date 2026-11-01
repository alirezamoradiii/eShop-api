import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './models/users.model.js';
import { UsersService } from './users.service.js';
import { AuthModule } from '../auth/auth.module.js';
import { CreateUserProvider } from './providers/create-user.provider.js';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([UserModel]),
  ],
  providers: [UsersService, CreateUserProvider],
  exports: [UsersService, CreateUserProvider],
})
export class UsersModule {}
