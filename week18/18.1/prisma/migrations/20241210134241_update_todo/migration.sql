/*
  Warnings:

  - Added the required column `city` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "city" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "todo" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "todo_id_key" ON "todo"("id");
