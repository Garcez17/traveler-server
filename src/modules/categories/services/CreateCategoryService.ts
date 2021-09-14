import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { Category } from '../infra/typeorm/entities/Category';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
}

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Category> {
    const findExistentCategory = await this.categoriesRepository.findByName(
      name,
    );

    if (findExistentCategory) throw new AppError('Category already exists.');

    const category = await this.categoriesRepository.create({
      name,
    });

    return category;
  }
}

export { CreateCategoryService };
