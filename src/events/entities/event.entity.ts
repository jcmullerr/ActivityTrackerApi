import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Activity } from 'src/activities/entities/activity.entity';

export type EventDocument = HydratedDocument<Event>;

@Schema()
export class Event {
  @Prop()
  date: Date;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Activity.name })
  activity: Activity;
}

export const EventSchema = SchemaFactory.createForClass(Event);
