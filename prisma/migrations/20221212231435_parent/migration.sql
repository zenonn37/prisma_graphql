/*
  Warnings:

  - You are about to drop the column `Comments` on the `Engagment` table. All the data in the column will be lost.
  - You are about to drop the column `Likes` on the `Engagment` table. All the data in the column will be lost.
  - You are about to drop the column `Saves` on the `Engagment` table. All the data in the column will be lost.
  - Added the required column `comments` to the `Engagment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `likes` to the `Engagment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postId` to the `Engagment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saves` to the `Engagment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Engagment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "likes" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "saves" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    CONSTRAINT "Engagment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Engagment" ("id") SELECT "id" FROM "Engagment";
DROP TABLE "Engagment";
ALTER TABLE "new_Engagment" RENAME TO "Engagment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
