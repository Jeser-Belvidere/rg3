import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });
  // const app = await NestFactory.create(AppModule, {
  //   logger: false
  // });
  app.enableCors({ credentials: true, origin: '*' });
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
