import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class ForeignKeysTableOrders1611500903219 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey('orders', new TableForeignKey({
      name: 'OrderUser',
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    }));

    await queryRunner.createForeignKey('orders', new TableForeignKey({
      name: 'OrderSale',
      columnNames: ['sale_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'sales',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('orders', 'OrderUser');

    await queryRunner.dropForeignKey('orders', 'OrderSale');
  }
}
