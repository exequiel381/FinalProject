import {MigrationInterface, QueryRunner} from "typeorm";

export class localityUsers1655123671438 implements MigrationInterface {
    name = 'localityUsers1655123671438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`reaction\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` text NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_id\` int NULL, \`post_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(150) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`imagePost\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(150) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`post_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`typePost\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(150) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`posts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(150) NOT NULL, \`content\` text NOT NULL, \`status\` tinyint NOT NULL DEFAULT 1, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`type_id\` int NULL, \`category_id\` int NULL, \`author\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NULL DEFAULT '', \`lastName\` varchar(255) NULL DEFAULT '', \`dni\` varchar(20) NULL DEFAULT '', \`email\` varchar(255) NOT NULL, \`profilePicture\` varchar(255) NULL, \`password\` varchar(128) NOT NULL, \`roles\` text NOT NULL, \`status\` tinyint NOT NULL DEFAULT 1, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`locality_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`locality\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(150) NOT NULL, \`postalCode\` int NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`province_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`province\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(150) NOT NULL, \`ISO\` varchar(10) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`country_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`country\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(150) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`reaction\` ADD CONSTRAINT \`FK_978c984f412d09b43304e41ae9a\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`reaction\` ADD CONSTRAINT \`FK_4af0a7b3bc874c64e408aaa9853\` FOREIGN KEY (\`post_id\`) REFERENCES \`posts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`imagePost\` ADD CONSTRAINT \`FK_8e2c83669db79bc166f7c2a1468\` FOREIGN KEY (\`post_id\`) REFERENCES \`posts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD CONSTRAINT \`FK_e40f506c288497c6168f9bda251\` FOREIGN KEY (\`type_id\`) REFERENCES \`typePost\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD CONSTRAINT \`FK_852f266adc5d67c40405c887b49\` FOREIGN KEY (\`category_id\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD CONSTRAINT \`FK_d03fb91772937997f010466a007\` FOREIGN KEY (\`author\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_3c9e85877b6528d539c7b1c42b0\` FOREIGN KEY (\`locality_id\`) REFERENCES \`locality\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`locality\` ADD CONSTRAINT \`FK_af94b6332ff5a73ce04cda9ccc3\` FOREIGN KEY (\`province_id\`) REFERENCES \`province\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`province\` ADD CONSTRAINT \`FK_e1a4eb156aedf1714d673d13941\` FOREIGN KEY (\`country_id\`) REFERENCES \`country\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`province\` DROP FOREIGN KEY \`FK_e1a4eb156aedf1714d673d13941\``);
        await queryRunner.query(`ALTER TABLE \`locality\` DROP FOREIGN KEY \`FK_af94b6332ff5a73ce04cda9ccc3\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_3c9e85877b6528d539c7b1c42b0\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP FOREIGN KEY \`FK_d03fb91772937997f010466a007\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP FOREIGN KEY \`FK_852f266adc5d67c40405c887b49\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP FOREIGN KEY \`FK_e40f506c288497c6168f9bda251\``);
        await queryRunner.query(`ALTER TABLE \`imagePost\` DROP FOREIGN KEY \`FK_8e2c83669db79bc166f7c2a1468\``);
        await queryRunner.query(`ALTER TABLE \`reaction\` DROP FOREIGN KEY \`FK_4af0a7b3bc874c64e408aaa9853\``);
        await queryRunner.query(`ALTER TABLE \`reaction\` DROP FOREIGN KEY \`FK_978c984f412d09b43304e41ae9a\``);
        await queryRunner.query(`DROP TABLE \`country\``);
        await queryRunner.query(`DROP TABLE \`province\``);
        await queryRunner.query(`DROP TABLE \`locality\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`posts\``);
        await queryRunner.query(`DROP TABLE \`typePost\``);
        await queryRunner.query(`DROP TABLE \`imagePost\``);
        await queryRunner.query(`DROP TABLE \`category\``);
        await queryRunner.query(`DROP TABLE \`reaction\``);
    }

}
