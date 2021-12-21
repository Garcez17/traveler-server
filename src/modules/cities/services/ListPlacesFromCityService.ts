import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import { Place } from '../infra/typeorm/entities/Place';
import { ICitiesRepository } from '../repositories/ICitiesRepository';
import { IPlacesRepository } from '../repositories/IPlacesRepository';

@injectable()
class ListPlacesFromCityService {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,

    @inject('PlacesRepository')
    private placesRepository: IPlacesRepository,
  ) {}

  public async execute(city_name: string): Promise<Place[]> {
    const city = await this.citiesRepository.findByName(city_name);

    if (!city) throw new AppError('City not found.');

    const places = await this.placesRepository.findAllByCityId(city.id);

    return places;
  }
}

export { ListPlacesFromCityService };
