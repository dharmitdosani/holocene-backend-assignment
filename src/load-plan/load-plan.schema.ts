import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';

export type PlanDocument = HydratedDocument<Plan>;

@Schema({ timestamps: true })
export class Plan extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: string;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  length: number;

  @Prop({ required: true })
  width: number;

  @Prop({ required: true })
  height: number;

  @Prop({ required: true })
  weight: number;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  stackable: boolean;

  @Prop({ required: true })
  tiltable: boolean;

  @Prop()
  deletedAt: Date;
}

export const PlanSchema = SchemaFactory.createForClass(Plan);
