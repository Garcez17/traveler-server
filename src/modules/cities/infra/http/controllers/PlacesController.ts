import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePlaceService } from '@modules/cities/services/CreatePlaceService';
import { ShowPlaceService } from '@modules/cities/services/ShowPlaceService';
import { ListPlacesFromCityService } from '@modules/cities/services/ListPlacesFromCityService';
import { classToClass } from 'class-transformer';

class PlacesController {
  async index(req: Request, res: Response): Promise<Response> {
    const { city_name } = req.query;

    const listPlacesFromCityService = container.resolve(
      ListPlacesFromCityService,
    );

    const places = await listPlacesFromCityService.execute(city_name as string);

    return res.json(classToClass(places));
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showPlaceService = container.resolve(ShowPlaceService);

    const place = await showPlaceService.execute(id);

    return res.json(classToClass(place));
  }

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
