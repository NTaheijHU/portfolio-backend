import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Skill, SkillSchema } from './schemas/skill.schema';

@Module({
  providers: [SkillService],
  controllers: [SkillController],
  imports: [
    MongooseModule.forFeature(
      [{ name: Skill.name, schema: SkillSchema }],
      'general',
    ),
  ],
})
export class SkillModule {}
