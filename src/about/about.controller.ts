import { Controller, Get } from '@nestjs/common';
import { AboutService } from './about.service';

@Controller('about')
export class AboutController {
  constructor(private readonly service: AboutService) {}

  @Get()
  async index() {
    return await this.service.findOne();
  }
}
