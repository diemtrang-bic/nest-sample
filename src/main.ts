import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  console.log('bootstrapbootstrapbootstrap', new Date().toUTCString());
  console.log('33333333333333333333333', new Date().toUTCString());
}
bootstrap();
