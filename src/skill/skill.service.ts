import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill, SkillDocument } from './schemas/skill.schema';

@Injectable()
export class SkillService {
  constructor(
    @InjectModel(Skill.name) private readonly model: Model<SkillDocument>,
  ) {}

  async findAll(): Promise<Skill[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Skill> {
    return await this.model.findOne({ short: id }).exec();
  }
}
