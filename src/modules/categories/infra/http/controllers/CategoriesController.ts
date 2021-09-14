import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import { CreateCategoryService } from '@modules/categories/services/CreateCategoryService';

export class CategoriesController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const createCategory = container.resolve(CreateCategoryService);

    const category = await createCategory.execute({
      name,
    });

    return res.json(classToClass(category));
  }
}
