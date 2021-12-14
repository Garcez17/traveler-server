import { ICreatePlacesDTO } from '../dtos/ICreatePlacesDTO';
import { Place } from '../infra/typeorm/entities/Place';

export interface IPlacesRepository {
  create(data: ICreatePlacesDTO): Promise<Place>;
}
