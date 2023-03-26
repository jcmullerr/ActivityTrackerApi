import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { EntityRepository } from 'src/common/entity.respository';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersRepository extends EntityRepository<UserDocument> {
  constructor(@InjectModel(User.name) userModel: Model<UserDocument>) {
    super(userModel);
  }

  async findOne(
    entityFilterQuery: FilterQuery<UserDocument>,
    projection?: Record<string, unknown>,
  ): Promise<UserDocument | null> {
    return this.entityModel.findOne(entityFilterQuery, {
      __v: 0,
      password: 0,
      ...projection,
    });
  }

  async find(
    entityFilterQuery: FilterQuery<UserDocument>,
    projection?: Record<string, unknown>,
  ): Promise<UserDocument[]> {
    return this.entityModel.find(entityFilterQuery, {
      __v: 0,
      password: 0,
      ...projection,
    });
  }
}
