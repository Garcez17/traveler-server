import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import { CreateCityService } from '@modules/cities/services/CreateCityService';

export class CitiesController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const requestImage = req.file as Express.Multer.File;
    const path = requestImage.filename;

    const createCity = container.resolve(CreateCityService);

    const city = await createCity.execute({
      name,
      cityImage: path,
    });

    return res.status(201).json(classToClass(city));
  }
}
