import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoadPlanModule } from "./load-plan/load-plan.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING, {
      dbName: "shipments",
    }),
    LoadPlanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
