import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment {
  @Prop({ required: true })
  tableName: string;

  @Prop({ required: true })
  startTime: Date;

  @Prop({ required: true })
  endTime: Date;

  @Prop({ required: true })
  duration: number; // in minutes

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  isPaid: boolean;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
