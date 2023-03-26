import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Activity } from 'src/activities/entities/activity.entity';
import { Entity } from 'src/common/entity';

export type EventDocument = HydratedDocument<Event>;

@Schema()
export class Event extends Entity {
  @Prop()
  date: Date;
  @Prop({ type: mongoose.Schema.Types.String, ref: Activity.name })
  activity: Activity;
}

export const EventSchema = SchemaFactory.createForClass(Event);
