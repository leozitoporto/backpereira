import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddWeightSales1615233294093 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'sales',
      new TableColumn({
        name: 'weight',
        type: 'decimal(12,2)',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('sales', 'weight');
  }
}
