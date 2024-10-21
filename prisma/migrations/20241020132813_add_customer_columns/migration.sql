-- CreateTable
CREATE TABLE "Booking" (
    "id" BIGSERIAL NOT NULL,
    "is_corporate" BOOLEAN NOT NULL,
    "booking_no" TEXT NOT NULL,
    "checkin" TIMESTAMP(3) NOT NULL,
    "checkout" TIMESTAMP(3) NOT NULL,
    "guest_name" TEXT NOT NULL,
    "total_amount_including_extra_cost" DECIMAL(65,30) NOT NULL,
    "get_amount_paid" DECIMAL(65,30) NOT NULL,
    "status_key" INTEGER NOT NULL,
    "source_key" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "payment_type" TEXT NOT NULL,
    "ota_source" TEXT NOT NULL,
    "ota_prefix" TEXT NOT NULL,
    "ota_booking_id" TEXT NOT NULL,
    "meal_plan_type" TEXT NOT NULL,
    "contains_notes" BOOLEAN NOT NULL,
    "no_of_adults" INTEGER NOT NULL,
    "no_of_rooms" INTEGER NOT NULL,
    "is_wizard_booking" BOOLEAN NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);
