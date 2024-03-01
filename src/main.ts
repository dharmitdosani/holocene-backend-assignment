import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true,
      },
      exceptionFactory: (errors) => {
        // const result = errors?.map((error) => ({
        //   property: error.property,
        //   message: error?.constraints?.[Object.keys(error?.constraints)?.[0]],
        // }));
        return new BadRequestException(errors);
      },
      stopAtFirstError: true,
    }),
  );
  await app.listen(8080);
}

bootstrap();
