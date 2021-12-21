import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import { CreateCategoryService } from '@modules/categories/services/CreateCategoryService';
import { ListCategoryService } from '@modules/categories/services/ListCategoryService';

export class CategoriesController {
  public async index(_: Request, res: Response): Promise<Response> {
    const listCategories = container.resolve(ListCategoryService);

    const categories = await listCategories.execute();

    return res.json(categories);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const createCategory = container.resolve(CreateCategoryService);

    const category = await createCategory.execute({
      name,
    });

    return res.json(classToClass(category));
  }
}
