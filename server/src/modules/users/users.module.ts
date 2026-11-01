import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './models/users.model.js';
import { UsersService } from './users.service.js';
import { AuthModule } from '../auth/auth.module.js';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([UserModel]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
