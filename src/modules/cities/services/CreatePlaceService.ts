import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { ICategoriesRepository } from '@modules/categories/repositories/ICategoriesRepository';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import { IAdressesRepository } from '../repositories/IAdressesRepository';
import { ICitiesRepository } from '../repositories/ICitiesRepository';
import { IPlacesRepository } from '../repositories/IPlacesRepository';

import { Place } from '../infra/typeorm/entities/Place';

interface IRequest {
  name: string;
  place_image: string;
  description: string;
  category_id: string;
  city_id: string;
  address: {
    zipcode: string;
    street: string;
    neighborhood: string;
    number: string;
  };
}

@injectable()
class CreatePlaceService {
  constructor(
    @inject('PlacesRepository')
    private placesRepository: IPlacesRepository,

    @inject('AdressesRepository')
    private adressesRepository: IAdressesRepository,

    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,

    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    name,
    place_image,
    description,
    category_id,
    city_id,
    address,
  }: IRequest): Promise<Place> {
    const category = await this.categoriesRepository.findById(category_id);

    if (!category) throw new AppError('Category dosent exists.');

    const city = await this.citiesRepository.findById(city_id);

    if (!city) throw new AppError('City dosent exists.');

    const { id: address_id } = await this.adressesRepository.create(address);

    const [filename] = await this.storageProvider.saveFile([
      {
        path: place_image,
      },
    ]);

    const place = await this.placesRepository.create({
      name,
      image: filename.path,
      description,
      category_id: category.id,
      city_id: city.id,
      address_id,
    });

    return place;
  }
}

export { CreatePlaceService };
