import { BadRequestException, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("Holocene Test API")
    .setDescription("Load plan API for Holocene Test")
    .setVersion("1.0")
    .addServer("http://localhost:8080/", "Local environment")
    .addServer("https://staging.yourapi.com/", "Staging")
    .addServer("https://production.yourapi.com/", "Production")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api-docs", app, document);

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
    })
  );
  await app.listen(8080);
}

bootstrap();
