import { Injectable } from '@nestjs/common';
import { EntityService } from 'src/common/entity.service';
import { UserDocument } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService extends EntityService<UserDocument> {
  constructor(userRepository: UsersRepository) {
    super(userRepository);
  }
}
