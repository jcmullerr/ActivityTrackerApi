import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ActivityDocument = HydratedDocument<Activity>;

@Schema()
export class Activity {
  @Prop()
  name: string;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
