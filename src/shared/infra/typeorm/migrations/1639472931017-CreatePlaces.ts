import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePlaces1639472931017 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'places',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'image',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'category_id',
            type: 'uuid',
          },
          {
            name: 'address_id',
            type: 'uuid',
          },
          {
            name: 'city_id',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'FKCategoryPlace',
            columnNames: ['category_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'categories',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FKAddressPlace',
            columnNames: ['address_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'adresses',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FKCityPlace',
            columnNames: ['city_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'cities',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('places');
  }
}
