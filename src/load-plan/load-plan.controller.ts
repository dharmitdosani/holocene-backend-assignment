import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoadPlanRequestDto } from './load-plan.dto';
import { LoadPlanService } from './load-plan.service';

@Controller('load-plan')
export class LoadPlanController {
  constructor(private readonly loadPlanService: LoadPlanService) { }

  @Get()
  findAll() {
    return this.loadPlanService.findAll();
  }

  @Post('batch')
  bulkActions(@Body() body: LoadPlanRequestDto) {
    return this.loadPlanService.bulkActions(body.plans);
  }
}
