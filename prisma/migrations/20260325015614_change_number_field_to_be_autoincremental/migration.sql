/*
  Warnings:

  - Made the column `number` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
CREATE SEQUENCE users_number_seq;
ALTER TABLE "Users" ALTER COLUMN "number" SET NOT NULL,
ALTER COLUMN "number" SET DEFAULT nextval('users_number_seq');
ALTER SEQUENCE users_number_seq OWNED BY "Users"."number";
