import { getRepository, Repository } from 'typeorm';

import { ICreateAdressesDTO } from '@modules/cities/dtos/ICreateAdressesDTO';

import { IAdressesRepository } from '@modules/cities/repositories/IAdressesRepository';

import { Address } from '../entities/Address';

class AdressesRepository implements IAdressesRepository {
  private ormRepository: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(Address);
  }

  public async create(data: ICreateAdressesDTO): Promise<Address> {
    const address = this.ormRepository.create(data);

    await this.ormRepository.save(address);

    return address;
  }
}

export { AdressesRepository };
