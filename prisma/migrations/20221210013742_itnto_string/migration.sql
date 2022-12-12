-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Engagment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Likes" TEXT NOT NULL,
    "Comments" TEXT NOT NULL,
    "Saves" TEXT NOT NULL
);
INSERT INTO "new_Engagment" ("Comments", "Likes", "Saves", "id") SELECT "Comments", "Likes", "Saves", "id" FROM "Engagment";
DROP TABLE "Engagment";
ALTER TABLE "new_Engagment" RENAME TO "Engagment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
