import { Category } from '@modules/categories/infra/typeorm/entities/Category';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import uploadConfig from '@config/upload';
import { Expose } from 'class-transformer';
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

  @OneToOne(() => Address, { eager: true })
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @Column()
  address_id: string;

  @OneToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @Column()
  city_id: string;

  @Expose({ name: 'image_url' })
  getAvatarUrl(): string | null {
    if (!this.image) {
      return null;
    }

    switch (uploadConfig.driver) {
      case 'disk':
        return `${process.env.APP_API_URL}/files/${this.image}`;
      case 's3':
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.image}`;
      default:
        return null;
    }
  }
}

export { Place };
