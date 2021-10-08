import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review, ReviewDocument } from './schemas/review.schema';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name) private readonly model: Model<ReviewDocument>,
  ) {}

  async findAll(): Promise<Review[]> {
    return await this.model.find().exec();
  }

  async findAllOne(id: number): Promise<Review[]> {
    return await this.model.find({ stars: { $eq: id } }).exec();
  }
}
