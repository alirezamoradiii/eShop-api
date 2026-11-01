import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { UserModel } from './models/users.model.js';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserModel)
    private readonly usersModel: Repository<UserModel>,
  ) {}

  public async findUsers(
    filters: Pick<
      FindOptionsWhere<UserModel>,
      'id' | 'email' | 'role' | 'created_at' | 'updated_at'
    > = {},
  ): Promise<UserModel[]> {
    return await this.usersModel.find({
      where: filters,
    });
  }
}
