import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './models/users.model.js';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
})
export class UsersModule {}
