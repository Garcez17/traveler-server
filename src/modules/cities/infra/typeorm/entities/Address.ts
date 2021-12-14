import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('adresses')
class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'zip_code' })
  zipcode: string;

  @Column()
  street: string;

  @Column()
  neighborhood: string;

  @Column()
  number: string;
}

export { Address };
