import { ICreateCitiesDTO } from '@modules/cities/dtos/ICreateCitiesDTO';
import { ICitiesRepository } from '@modules/cities/repositories/ICitiesRepository';
import { getRepository, Repository } from 'typeorm';
import { City } from '../entities/City';

class CitiesRepository implements ICitiesRepository {
  private ormRepository: Repository<City>;

  constructor() {
    this.ormRepository = getRepository(City);
  }

  public async findAll(): Promise<City[]> {
    return this.ormRepository.find();
  }

  public async findById(id: string): Promise<City | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async create(data: ICreateCitiesDTO): Promise<City> {
    const city = this.ormRepository.create(data);

    await this.ormRepository.save(city);

    return city;
  }

  public async findByName(name: string): Promise<City | undefined> {
    const city = await this.ormRepository.findOne({
      where: { name },
    });

    return city;
  }
}

export { CitiesRepository };
