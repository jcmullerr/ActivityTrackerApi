import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { Activity, ActivitySchema } from './entities/activity.entity';
import { ActivitiesRepository } from './activities.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Activity.name, schema: ActivitySchema },
    ]),
  ],
  controllers: [ActivitiesController],
  providers: [ActivitiesService, ActivitiesRepository],
})
export class ActivitiesModule {}
