import { Controller, Get, Param } from '@nestjs/common';
import { ReviewService } from './review.service';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly service: ReviewService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':stars')
  async find(@Param('stars') stars: number) {
    return await this.service.findAllOne(stars);
  }
}
