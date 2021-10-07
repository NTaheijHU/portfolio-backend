/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  link: string;

  @Prop({ required: true })
  short: string;

  @Prop({ required: true })
  githubLink: string;

  @Prop({ required: true })
  websiteLink: string;

  @Prop({ required: true })
  shortDescription: string;

  @Prop({ required: true })
  longDescription: string;

  @Prop({ required: true })
  likes: string;

  @Prop({ required: true })
  skills: string[];

  @Prop({ required: true })
  images: { text: string, link: string }[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
