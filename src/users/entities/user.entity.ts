import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { hashSync } from 'bcrypt';
import { HydratedDocument } from 'mongoose';
import { Entity } from 'src/common/entity';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Entity {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', function (next: any) {
  if (!this.isModified('password')) return next();
  this.password = hashSync(this.password, 10);
  next();
});
