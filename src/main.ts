// /* eslint-disable prettier/prettier */
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   const allowedOrigins = ['http://localhost:3000', 'https://telebotclient6.onrender.com'];
  // Adjust CORS configuration for webhook
  app.enableCors({
    origin:allowedOrigins, // Specify the allowed origin(s)
    methods: 'GET,PUT,POST,DELETE', // Specify which methods are allowed
    allowedHeaders: 'Content-Type,Authorization', // Specify allowed headers
    credentials: true, // Allow sending cookies or other credentials
  }
  );

 
  // Start the NestJS application
  await app.listen(process.env.PORT);
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
