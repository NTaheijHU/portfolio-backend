/* eslint-disable prettier/prettier */
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

  // @Prop({ required: true })
  // projects: string;

  // { title: string, image: string, details: string, githubLink: string }

  // @Prop({ required: true })
  // contact: { phone: string, email: string, socials: { name: string, link: string }[] };
}

export const AboutSchema = SchemaFactory.createForClass(About);
