import { Injectable } from '@nestjs/common';
import { PlanDto } from './load-plan.dto';
import { IPlan } from './load-plan.model';

@Injectable()
export class LoadPlanService {
  private plans: IPlan[];

  findAll(): IPlan[] {
    // get all plans from the db except for the deleted ones and return
    return this.plans;
  }

  bulkActions(plans: PlanDto[]): PlanDto[] {
    // get all plans from the db except for the deleted ones
    // perform bulk actions on the plans
    // plans without an ID are the ones to be created
    // plans with an ID are the ones to be updated
    // plans which are there in the db response but not in the request are the ones to be deleted

    return plans;
  }
}
