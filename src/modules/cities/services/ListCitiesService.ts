import { inject, injectable } from 'tsyringe';
import { City } from '../infra/typeorm/entities/City';
import { ICitiesRepository } from '../repositories/ICitiesRepository';

@injectable()
class ListCitiesService {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,
  ) {}

  public async execute(): Promise<City[]> {
    return this.citiesRepository.findAll();
  }
}

export { ListCitiesService };
