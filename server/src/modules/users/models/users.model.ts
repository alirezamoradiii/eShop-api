import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UsersRole } from './types/user-role.enum.js';

@Entity('users')
export class UserModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  password: string;

  @Column({
    type: 'enum',
    enum: UsersRole,
    default: UsersRole.Customer,
    nullable: false,
  })
  role: UsersRole;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date;
}
