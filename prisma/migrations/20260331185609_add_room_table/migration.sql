-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL,
    "room_code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Room_room_code_key" ON "Room"("room_code");
