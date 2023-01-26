import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as vaultcore from 'dotenv-vault-core';

async function bootstrap() {
  vaultcore.config();
  const app = await NestFactory.create(AppModule);
  await app.listen(3050);
}
bootstrap();
