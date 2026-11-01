import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { HashingProvider } from './hashing.provider.js';

@Injectable()
export class BcryptProvider implements HashingProvider {
  hash(data: string | Buffer): Promise<string> {
    return bcrypt.hash(data, 12);
  }

  compare(data: string | Buffer, enc: string): Promise<boolean> {
    return bcrypt.compare(data, enc);
  }
}
