import { forwardRef, Module } from '@nestjs/common';
import { HashingProvider } from './providers/hashing.provider.js';
import { BcryptProvider } from './providers/bcrypt.provider.js';
import { UsersModule } from '../users/users.module.js';
import { AuthService } from './auth.service.js';

@Module({
  imports: [forwardRef(() => UsersModule)],
  providers: [
    {
      provide: HashingProvider,
      useClass: BcryptProvider,
    },
    AuthService,
  ],
  exports: [HashingProvider],
})
export class AuthModule {}
