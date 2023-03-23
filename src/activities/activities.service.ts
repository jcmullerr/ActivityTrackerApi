import { Injectable } from '@nestjs/common';
import { EntityService } from 'src/common/entity.service';
import { ActivitiesRepository } from './activities.repository';
import { ActivityDocument } from './entities/activity.entity';

@Injectable()
export class ActivitiesService extends EntityService<ActivityDocument> {
  constructor(activityRepository: ActivitiesRepository) {
    super(activityRepository);
  }
}
