import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlanDto } from './load-plan.dto';
import { Plan } from './load-plan.schema';

@Injectable()
export class LoadPlanService {
  constructor(@InjectModel(Plan.name) private planModel: Model<Plan>) { }

  findAll(): Promise<Plan[]> {
    // get all plans from the db except for the deleted ones and return
    return this.planModel.find({ deletedAt: { $exists: false } });
  }

  async bulkActions(plansDto: PlanDto[]): Promise<Plan[]> {
    const currentPlans = await this.planModel.find(
      { deletedAt: { $exists: false } },
      { projection: { _id: 1 } },
    );
    const currentIdsSet = new Set(currentPlans.map((p) => p._id.toString()));

    const plansToCreate: Plan[] = [];
    const bulkWriteData = [];

    plansDto.forEach((plan) => {
      // to create
      if (!plan._id) {
        plansToCreate.push(new this.planModel(plan));
      } else {
        // to update
        bulkWriteData.push({
          updateOne: {
            filter: { _id: plan._id },
            update: {
              $set: plan,
            },
          },
        });

        // to delete
        currentIdsSet.delete(plan._id);
      }
    });

    bulkWriteData.push({
      updateMany: {
        filter: { _id: { $in: Array.from(currentIdsSet) } },
        update: {
          $set: { deletedAt: new Date() },
        },
      },
    });

    await this.planModel.bulkSave(plansToCreate);
    await this.planModel.bulkWrite(bulkWriteData);

    return this.findAll();
  }
}
