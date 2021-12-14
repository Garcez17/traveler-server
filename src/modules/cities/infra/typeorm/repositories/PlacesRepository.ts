import { getRepository, Repository } from 'typeorm';

import { IPlacesRepository } from '@modules/cities/repositories/IPlacesRepository';

import { ICreatePlacesDTO } from '@modules/cities/dtos/ICreatePlacesDTO';

import { Place } from '../entities/Place';

class PlacesRepository implements IPlacesRepository {
  private ormRepository: Repository<Place>;

  constructor() {
    this.ormRepository = getRepository(Place);
  }

  public async create(data: ICreatePlacesDTO): Promise<Place> {
    const place = this.ormRepository.create(data);

    await this.ormRepository.save(place);

    return place;
  }
}

export { PlacesRepository };
