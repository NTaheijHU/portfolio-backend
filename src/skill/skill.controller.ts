import { Controller, Get, Param } from '@nestjs/common';
import { SkillService } from './skill.service';

@Controller('skills')
export class SkillController {
  constructor(private readonly service: SkillService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':short')
  async find(@Param('short') short: string) {
    return await this.service.findOne(short);
  }
}
