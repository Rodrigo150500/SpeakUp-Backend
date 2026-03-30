/*
  Warnings:

  - You are about to drop the column `class` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "class",
ADD COLUMN     "section" TEXT;
