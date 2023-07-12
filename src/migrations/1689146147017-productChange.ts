import { MigrationInterface, QueryRunner } from 'typeorm';

export class ProductChange1689146147017 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "product"' + ' ADD COLUMN "batch_no" varchar'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "product" DROP COLUMN "batch_no"');
  }
}
