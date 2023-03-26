import { Document, FilterQuery } from 'mongoose';
import { EntityRepository } from './entity.respository';

export abstract class EntityService<T extends Document> {
  constructor(protected readonly entityRepository: EntityRepository<T>) {}

  async create(createEntityDto: unknown): Promise<T> {
    return await this.entityRepository.create(createEntityDto);
  }

  async get(): Promise<T[]> {
    return await this.entityRepository.find({});
  }

  async getByFilter(entityFilterQuery: FilterQuery<T>): Promise<T[]> {
    return await this.entityRepository.find(entityFilterQuery);
  }

  async getById(
    id: string,
    projection?: Record<string, unknown>,
  ): Promise<T | null> {
    return await this.entityRepository.findOne({ _id: id }, projection);
  }

  async update(id: string, updateEntityDto: any): Promise<T | null> {
    return await this.entityRepository.findOneAndUpdate(
      { _id: id },
      updateEntityDto,
    );
  }

  async remove(id: string): Promise<boolean> {
    return await this.entityRepository.deleteMany({ _id: id });
  }
}
