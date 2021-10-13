/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type AboutDocument = About & Document;

@Schema()
export class About {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  aboutText: string;

  @Prop({ required: true })
  aboutTextLong: string;

  @Prop({ required: true })
  githubLink: string;

  @Prop({ required: true })
  projectsImage: string;

  @Prop({ required: true })
  projectsText: string;

  @Prop({ required: true })
  projectsTitle: string;
}

export const AboutSchema = SchemaFactory.createForClass(About);
