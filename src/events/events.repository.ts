import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/common/entity.respository';
import { Event, EventDocument } from './entities/event.entity';

@Injectable()
export class EventsRepository extends EntityRepository<EventDocument> {
  constructor(@InjectModel(Event.name) eventModel: Model<EventDocument>) {
    super(eventModel);
  }
}
