import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { MongooseModule } from '@nestjs/mongoose';

const MONGO_URI =
  'mongodb+srv://portfolio:zNlNRKMEuMwNBuAG@portfolio.hk5ii.mongodb.net/';

@Module({
  imports: [
    ProjectModule,
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
