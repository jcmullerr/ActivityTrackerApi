import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { Event, EventSchema } from './entities/event.entity';
import { EventsRepository } from './events.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }]),
  ],
  controllers: [EventsController],
  providers: [EventsService, EventsRepository],
})
export class EventsModule {}
