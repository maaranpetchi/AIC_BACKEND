import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.setGlobalPrefix('api');
  app.enableCors(); // enable CORS

  app.useGlobalPipes(new ValidationPipe())
  const config = new DocumentBuilder()
    .setTitle('AIC')
    .setDescription('AIC API Documentation')
    .setVersion('1.0')
    .addTag('AIC')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // app.setGlobalPrefix('api');
  // app.enableCors();

  await app.listen(3000);
}
bootstrap();
