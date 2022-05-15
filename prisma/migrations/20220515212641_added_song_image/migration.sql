/*
  Warnings:

  - Added the required column `image` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `song` ADD COLUMN `image` VARCHAR(191) NOT NULL,
    MODIFY `reproduced` INTEGER NOT NULL DEFAULT 0;
