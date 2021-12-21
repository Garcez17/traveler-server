import { ICreateCitiesDTO } from '../dtos/ICreateCitiesDTO';
import { City } from '../infra/typeorm/entities/City';

export interface ICitiesRepository {
  create(data: ICreateCitiesDTO): Promise<City>;
  findAll(): Promise<City[]>;
  findByName(name: string): Promise<City | undefined>;
  findById(id: string): Promise<City | undefined>;
}
