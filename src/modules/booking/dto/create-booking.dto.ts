// create-booking.dto.ts
import { IsBoolean, IsDateString, IsDecimal, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookingDto {
    @IsString()
    is_corporate: string;

    @IsString()
    @IsNotEmpty()
    booking_no: string;

    @IsString()
    checkin: string;

    @IsString()
    checkout: string;

    @IsString()
    @IsNotEmpty()
    guest_name: string;

    @IsString()
    total_amount_including_extra_cost: string;

    @IsString()
    get_amount_paid: string;

    @IsString()
    status_key: string;

    @IsString()
    source_key: string;

    @IsString()
    status: string;

    @IsString()
    source: string;

    @IsString()
    payment_type: string;

    @IsString()
    ota_source: string;

    @IsString()
    ota_prefix: string;

    @IsString()
    ota_booking_id: string;

    @IsString()
    meal_plan_type: string;

    @IsString()
    contains_notes: string;

    @IsString()
    no_of_adults: string;

    @IsString()
    no_of_rooms: string;

    @IsString()
    is_wizard_booking: string;
}
