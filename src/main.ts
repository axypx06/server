/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Adjust CORS configuration for webhook
  app.enableCors({
    origin: '*', // Allow any origin since the Telegram API will send requests
    methods: 'POST', // Allow only POST method for incoming updates
    allowedHeaders: 'Content-Type', // Specify allowed headers
    credentials: true, // Allow sending cookies or other credentials
  });

  // Get the Telegram bot token from environment variables
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

  // Set up the webhook URL
  const webhookUrl = `/${TELEGRAM_BOT_TOKEN}/webhook`; // Adjust the URL as needed

  // Enable the webhook and specify the route
  await app.setGlobalPrefix(webhookUrl);

  // Start the NestJS application
  await app.listen(process.env.PORT || 3000);
}

bootstrap();

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const allowedOrigins = ['http://localhost:3001','https://telebotclient6.onrender.com/'];
//   app.enableCors({
//     origin:allowedOrigins, // Specify the allowed origin(s)
//     methods: 'GET,PUT,POST,DELETE', // Specify which methods are allowed
//     allowedHeaders: 'Content-Type,Authorization', // Specify allowed headers
//     credentials: true, // Allow sending cookies or other credentials
//   }
//   );
//   await app.listen(process.env.PORT);
// }
// bootstrap();
