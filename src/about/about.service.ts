import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { About, AboutDocument } from './schemas/about.schema';

@Injectable()
export class AboutService {
  constructor(
    @InjectModel(About.name) private readonly model: Model<AboutDocument>,
  ) {}

  async findAll(): Promise<About[]> {
    return await this.model.find().exec();
  }

  async findOne(): Promise<About> {
    return await this.model.findOne().exec();
  }
}
