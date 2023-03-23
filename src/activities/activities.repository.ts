import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/common/entity.respository';
import { Activity, ActivityDocument } from './entities/activity.entity';

@Injectable()
export class ActivitiesRepository extends EntityRepository<ActivityDocument> {
  constructor(
    @InjectModel(Activity.name) activitiesModel: Model<ActivityDocument>,
  ) {
    super(activitiesModel);
  }
}
