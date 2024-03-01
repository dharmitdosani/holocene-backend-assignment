import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";

export class PlanDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  readonly _id: string;

  @ApiProperty({ required: true, example: "red" })
  @IsString()
  readonly color: string;

  @ApiProperty({ required: true, example: "Box" })
  @IsString()
  readonly name: string;

  @ApiProperty({ required: true, example: 10 })
  @IsNumber()
  readonly length: number;

  @ApiProperty({ required: true, example: 10 })
  @IsNumber()
  readonly width: number;

  @ApiProperty({ required: true, example: 10 })
  @IsNumber()
  readonly height: number;

  @ApiProperty({ required: true, example: 50 })
  @IsNumber()
  readonly weight: number;

  @ApiProperty({ required: true, example: 100 })
  @IsNumber()
  readonly quantity: number;

  @ApiProperty({ required: true, example: true })
  @IsBoolean()
  readonly stackable: boolean;

  @ApiProperty({ required: true, example: false })
  @IsBoolean()
  readonly tiltable: boolean;
}

export class LoadPlanRequestDto {
  @ApiProperty({ required: true, type: [PlanDto] })
  @ValidateNested({ each: true })
  @Type(() => PlanDto)
  readonly plans: PlanDto[];
}
