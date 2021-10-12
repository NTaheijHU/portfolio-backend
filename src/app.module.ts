/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewModule } from './review/review.module';
import { SkillModule } from './skill/skill.module';
import { AboutModule } from './about/about.module';
import { MailModule } from './mail/mail.module';
import { MailController } from './mail/mail.controller';

require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;
@Module({
  imports: [
    ProjectModule,
    ReviewModule,
    SkillModule,
    AboutModule,
    MailModule,
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
  controllers: [AppController, MailController],
  providers: [AppService],
})
export class AppModule {}
