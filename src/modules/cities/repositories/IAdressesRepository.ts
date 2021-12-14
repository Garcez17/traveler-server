import { ICreateAdressesDTO } from '../dtos/ICreateAdressesDTO';
import { Address } from '../infra/typeorm/entities/Address';

export interface IAdressesRepository {
  create(data: ICreateAdressesDTO): Promise<Address>;
}
