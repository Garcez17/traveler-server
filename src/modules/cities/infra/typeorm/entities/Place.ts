import { Category } from '@modules/categories/infra/typeorm/entities/Category';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './Address';
import { City } from './City';

@Entity('places')
class Place {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @OneToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  category_id: string;

  @OneToOne(() => Address)
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @Column()
  address_id: string;

  @OneToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @Column()
  city_id: string;
}

export { Place };
