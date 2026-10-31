import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const Swagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('eShop-api')
    .addServer('/')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs', app, document);
};
