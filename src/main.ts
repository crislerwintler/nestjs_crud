import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ModelNotFoundExceptionError } from './exception-filters/model.not.found.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalFilters(new ModelNotFoundExceptionError());
  await app.listen(3000);
}
bootstrap();
