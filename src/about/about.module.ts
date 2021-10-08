import { Module } from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutController } from './about.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { About, AboutSchema } from './schemas/about.schema';

@Module({
  providers: [AboutService],
  controllers: [AboutController],
  imports: [
    MongooseModule.forFeature(
      [{ name: About.name, schema: AboutSchema }],
      'general',
    ),
  ],
})
export class AboutModule {}
