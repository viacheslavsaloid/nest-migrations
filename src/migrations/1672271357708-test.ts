import { MigrationInterface, QueryRunner } from 'typeorm';

export class test1672271357708 implements MigrationInterface {
  name = 'test1672271357708';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."users_type_enum" AS ENUM('0', '1')`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "type" "public"."users_type_enum" NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "type"`);
    await queryRunner.query(`DROP TYPE "public"."users_type_enum"`);
  }
}
