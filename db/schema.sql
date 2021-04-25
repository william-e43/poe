DROP TABLE IF EXISTS "pieces";

CREATE TABLE "pieces-test" (
  "id" SERIAL NOT NULL,
  "name" TEXT NOT NULL,
  "url" TEXT NOT NULL,
  "price" INTEGER NOT NULL,
  "description" TEXT,
  "onSale" BOOLEAN NOT NULL,
  "new" BOOLEAN NOT NULL,
)

