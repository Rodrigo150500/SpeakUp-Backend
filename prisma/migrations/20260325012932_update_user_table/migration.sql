/*
  Warnings:

  - Added the required column `criated_at` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "criated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "grade" TEXT,
ADD COLUMN     "number" INTEGER;
