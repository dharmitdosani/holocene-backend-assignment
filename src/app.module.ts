import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoadPlanModule } from './load-plan/load-plan.module';

@Module({
  imports: [LoadPlanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
