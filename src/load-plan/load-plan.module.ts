import { Module } from '@nestjs/common';
import { LoadPlanService } from './load-plan.service';
import { LoadPlanController } from './load-plan.controller';

@Module({
  providers: [LoadPlanService],
  controllers: [LoadPlanController]
})
export class LoadPlanModule {}
