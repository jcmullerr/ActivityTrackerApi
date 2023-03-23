import { Injectable } from '@nestjs/common';
import { EntityService } from 'src/common/entity.service';
import { EventDocument } from './entities/event.entity';
import { EventsRepository } from './events.repository';

@Injectable()
export class EventsService extends EntityService<EventDocument> {
  constructor(eventRepository: EventsRepository) {
    super(eventRepository);
  }
}
