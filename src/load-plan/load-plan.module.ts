import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_COLLECTIONS } from 'src/globals/constants';
import { LoadPlanController } from './load-plan.controller';
import { Plan, PlanSchema } from './load-plan.schema';
import { LoadPlanService } from './load-plan.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Plan.name,
        schema: PlanSchema,
        collection: MONGO_COLLECTIONS.LOAD_PLANS,
      },
    ]),
  ],
  providers: [LoadPlanService],
  controllers: [LoadPlanController],
})
export class LoadPlanModule { }
