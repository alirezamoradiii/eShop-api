import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import appConfig from '../configs/app.config.js';
import dbConfig from '../configs/db.config.js';
import { UsersModule } from '../modules/users/users.module.js';
import { AuthModule } from '../modules/auth/auth.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !process.env.NODE_ENV
        ? '.env'
        : `.env.${process.env.NODE_ENV}.local`,
      load: [appConfig, dbConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.getOrThrow<string>('dbConfig.host'),
        port: config.getOrThrow<number>('dbConfig.port'),
        username: config.getOrThrow<string>('dbConfig.user'),
        password: config.getOrThrow<string>('dbConfig.password'),
        database: config.getOrThrow<string>('dbConfig.database'),
        autoLoadEntities: config.getOrThrow<boolean>('dbConfig.autoLoad'),
        synchronize: config.getOrThrow<boolean>('dbConfig.sync'),
      }),
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    AppService,
  ],
})
export class AppModule {}
