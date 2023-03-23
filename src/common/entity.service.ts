import { Document } from 'mongoose';
import { EntityRepository } from './entity.respository';

export abstract class EntityService<T extends Document> {
  constructor(protected readonly entityRepository: EntityRepository<T>) {}

  create(createEntityDto: unknown) {
    return this.entityRepository.create(createEntityDto);
  }

  get() {
    return this.entityRepository.find({});
  }

  getById(id: string, projection?: Record<string, unknown>) {
    return this.entityRepository.findOne({ _id: id }, projection);
  }

  update(id: string, updateEntityDto: any) {
    return this.entityRepository.findOneAndUpdate({ _id: id }, updateEntityDto);
  }

  remove(id: string) {
    return this.entityRepository.deleteMany({ _id: id });
  }
}
