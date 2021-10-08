/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type ReviewDocument = Review & Document;

@Schema()
export class Review {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  stars: number;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  reviewTitle: string;

  @Prop({ required: true })
  quote: string;

  @Prop({ required: true })
  review: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
