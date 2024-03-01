import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class PlanDto {
  @IsOptional()
  @IsString()
  readonly _id: string;

  @IsString()
  readonly color: string;

  @IsString()
  readonly name: string;

  @IsNumber()
  readonly length: number;

  @IsNumber()
  readonly width: number;

  @IsNumber()
  readonly height: number;

  @IsNumber()
  readonly weight: number;

  @IsNumber()
  readonly quantity: number;

  @IsBoolean()
  readonly stackable: boolean;

  @IsBoolean()
  readonly tiltable: boolean;
}

export class LoadPlanRequestDto {
  @ValidateNested({ each: true })
  @Type(() => PlanDto)
  readonly plans: PlanDto[];
}
