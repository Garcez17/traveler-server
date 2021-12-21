import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import { Place } from '../infra/typeorm/entities/Place';
import { IPlacesRepository } from '../repositories/IPlacesRepository';

@injectable()
class ShowPlaceService {
  constructor(
    @inject('PlacesRepository')
    private placesRepository: IPlacesRepository,
  ) {}

  public async execute(place_id: string): Promise<Place> {
    const place = await this.placesRepository.findById(place_id);

    if (!place) throw new AppError('Place not found.');

    return place;
  }
}

export { ShowPlaceService };
