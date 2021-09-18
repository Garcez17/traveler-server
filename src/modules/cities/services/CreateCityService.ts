import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { City } from '../infra/typeorm/entities/City';
import { ICitiesRepository } from '../repositories/ICitiesRepository';

interface IRequest {
  name: string;
  cityImage: string;
}

@injectable()
class CreateCityService {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ name, cityImage }: IRequest): Promise<City> {
    const findExistentCity = await this.citiesRepository.findByName(name);

    if (findExistentCity) throw new AppError('City already exists.');

    const [filename] = await this.storageProvider.saveFile([
      {
        path: cityImage,
      },
    ]);

    const city = await this.citiesRepository.create({
      name,
      image: filename.path,
    });

    return city;
  }
}

export { CreateCityService };
