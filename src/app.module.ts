import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewModule } from './review/review.module';
import { SkillModule } from './skill/skill.module';
import { AboutModule } from './about/about.module';

const MONGO_URI =
  'mongodb+srv://portfolio:zNlNRKMEuMwNBuAG@portfolio.hk5ii.mongodb.net/';

@Module({
  imports: [
    ProjectModule,
    ReviewModule,
    SkillModule,
    AboutModule,
    MongooseModule.forRoot(MONGO_URI + 'general', {
      connectionName: 'general',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forRoot(MONGO_URI + 'projects', {
      connectionName: 'projects',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forRoot(MONGO_URI + 'reviews', {
      connectionName: 'reviews',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
