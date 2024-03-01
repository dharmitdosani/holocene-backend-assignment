import { Test, TestingModule } from '@nestjs/testing';
import { LoadPlanController } from './load-plan.controller';

describe('LoadPlanController', () => {
  let controller: LoadPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoadPlanController],
    }).compile();

    controller = module.get<LoadPlanController>(LoadPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
