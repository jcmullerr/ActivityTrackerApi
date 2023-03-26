import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  useSwagger(app);
  const port = process.env.PORT || 3000;
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}

function useSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Activity Tracker Api')
    .setDescription(
      'This api is reponsable for managing all the features from my activity tracker app',
    )
    .setVersion('1.0')
    .addTag('auth')
    .addTag('users')
    .addTag('activities')
    .addTag('events')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
}

bootstrap();
