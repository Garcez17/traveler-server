import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePlaceService } from '@modules/cities/services/CreatePlaceService';

class PlacesController {
  async create(req: Request, res: Response): Promise<Response> {
    const {
      name,
      description,
      category_id,
      city_id,
      zipcode,
      street,
      neighborhood,
      number,
    } = req.body;

    const requestImage = req.file as Express.Multer.File;

    const createPlaceService = container.resolve(CreatePlaceService);

    const place = await createPlaceService.execute({
      name,
      place_image: requestImage.filename,
      description,
      category_id,
      city_id,
      address: {
        zipcode,
        street,
        neighborhood,
        number,
      },
    });

    return res.status(201).json(place);
  }
}

export { PlacesController };
