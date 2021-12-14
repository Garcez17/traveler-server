import { container } from 'tsyringe';

import './providers';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';

import { ICategoriesRepository } from '@modules/categories/repositories/ICategoriesRepository';
import { CategoriesRepository } from '@modules/categories/infra/typeorm/repositories/CategoriesRepository';

import { ICitiesRepository } from '@modules/cities/repositories/ICitiesRepository';
import { CitiesRepository } from '@modules/cities/infra/typeorm/repositories/CitiesRepository';
import { IAdressesRepository } from '@modules/cities/repositories/IAdressesRepository';
import { AdressesRepository } from '@modules/cities/infra/typeorm/repositories/AdressesRepository';
import { IPlacesRepository } from '@modules/cities/repositories/IPlacesRepository';
import { PlacesRepository } from '@modules/cities/infra/typeorm/repositories/PlacesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ICitiesRepository>(
  'CitiesRepository',
  CitiesRepository,
);

container.registerSingleton<IAdressesRepository>(
  'AdressesRepository',
  AdressesRepository,
);

container.registerSingleton<IPlacesRepository>(
  'PlacesRepository',
  PlacesRepository,
);
