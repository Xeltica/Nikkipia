import { MigrationInterface, QueryRunner } from 'typeorm'

export class Task1591970905411 implements MigrationInterface {
  name = 'Task1591970905411'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "task" ("id" SERIAL NOT NULL, "label" character varying(100) NOT NULL, "done" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "task"')
  }
}
