import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Entity } from 'src/common/entity';

export type ActivityDocument = HydratedDocument<Activity>;

@Schema()
export class Activity extends Entity {
  @Prop()
  name: string;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
