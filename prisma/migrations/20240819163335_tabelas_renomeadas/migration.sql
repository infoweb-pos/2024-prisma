-- CreateTable
PRAGMA foreign_keys=off;
ALTER TABLE "User" RENAME TO "users";
ALTER TABLE "Post" RENAME TO "posts";
ALTER TABLE "Profile" RENAME TO "profiles";

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_nickname_key" ON "users"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_userId_key" ON "profiles"("userId");

PRAGMA foreign_keys=on;