import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from './schemas/project.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private readonly model: Model<ProjectDocument>,
  ) {}

  async findAll(): Promise<Project[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Project> {
    return await this.model.findOne({ short: id }).exec();
  }
}
