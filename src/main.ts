import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }))
  useContainer(app.select(AppModule), {fallbackOnErrors: true}) // delegates all dependency injection control to the nest
  await app.listen(3000);
}
bootstrap();
