/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const allowedOrigins = ['http://localhost:3001'];
  app.enableCors({
    origin:allowedOrigins, // Specify the allowed origin(s)
    methods: 'GET,PUT,POST,DELETE', // Specify which methods are allowed
    allowedHeaders: 'Content-Type,Authorization', // Specify allowed headers
    credentials: true, // Allow sending cookies or other credentials
  }
  );
  await app.listen(10000);
}
bootstrap();
