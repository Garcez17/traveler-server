import { getRepository, Repository } from 'typeorm';

import { ICreateCategoryDTO } from '@modules/categories/dtos/ICreateCategoryDTO';
import { ICategoriesRepository } from '@modules/categories/repositories/ICategoriesRepository';
import { Category } from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async findById(id: string): Promise<Category | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async create(data: ICreateCategoryDTO): Promise<Category> {
    const category = this.ormRepository.create(data);

    await this.ormRepository.save(category);

    return category;
  }

  public async findByName(name: string): Promise<Category | undefined> {
    const category = await this.ormRepository.findOne({
      where: { name },
    });

    return category;
  }
}

export { CategoriesRepository };
