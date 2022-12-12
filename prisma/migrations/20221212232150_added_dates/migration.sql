-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Engagment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "likes" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "saves" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Engagment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Engagment" ("comments", "id", "likes", "postId", "saves") SELECT "comments", "id", "likes", "postId", "saves" FROM "Engagment";
DROP TABLE "Engagment";
ALTER TABLE "new_Engagment" RENAME TO "Engagment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
