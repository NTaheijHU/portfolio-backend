import { Controller, Get, Param } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly service: ProjectService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':short')
  async find(@Param('short') short: string) {
    return await this.service.findOne(short);
  }
}
