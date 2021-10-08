import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Review, ReviewSchema } from './schemas/review.schema';

@Module({
  providers: [ReviewService],
  controllers: [ReviewController],
  imports: [
    MongooseModule.forFeature(
      [{ name: Review.name, schema: ReviewSchema }],
      'reviews',
    ),
  ],
})
export class ReviewModule {}
