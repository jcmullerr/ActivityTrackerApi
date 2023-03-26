import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { EntityRepository } from 'src/common/entity.respository';
import { Event, EventDocument } from './entities/event.entity';

@Injectable()
export class EventsRepository extends EntityRepository<EventDocument> {
  constructor(@InjectModel(Event.name) eventModel: Model<EventDocument>) {
    super(eventModel);
  }

  async findOne(
    entityFilterQuery: FilterQuery<EventDocument>,
    projection?: Record<string, unknown>,
  ): Promise<EventDocument | null> {
    console.log('chegou aqui');
    return await this.entityModel
      .findOne(entityFilterQuery, {
        __v: 0,
        ...projection,
      })
      .populate('activity', 'name')
      .exec();
  }
}
