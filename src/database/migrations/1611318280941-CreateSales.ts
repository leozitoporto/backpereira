import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateSales1611318280941 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'sales',
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
            name: 'price',
            type: 'decimal(12,2)',
            isNullable: false,
          },
          {
            name: 'obs',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'tp_sale',
            type: 'varchar',
            isNullable: false,
            default: "'V'",
          },
          {
            name: 'dt_valid',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'url_img',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sales');
  }
}
