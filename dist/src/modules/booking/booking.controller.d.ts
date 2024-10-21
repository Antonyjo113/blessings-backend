import { BookingService } from './booking.service';
import { Booking } from './booking.model';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking-dto';
export declare class BookingController {
    private bookingService;
    constructor(bookingService: BookingService);
    create(createBookingDto: CreateBookingDto): Promise<Booking>;
    getAll(): Promise<Booking[]>;
    get(id: string): Promise<Booking>;
    patch(id: string, updateBookingDto: UpdateBookingDto): Promise<{
        id: string;
        is_corporate: string;
        booking_no: string;
        checkin: string;
        checkout: string;
        guest_name: string;
        total_amount_including_extra_cost: string;
        get_amount_paid: string;
        status_key: string;
        source_key: string;
        status: string;
        source: string;
        payment_type: string;
        ota_source: string;
        ota_prefix: string;
        ota_booking_id: string;
        meal_plan_type: string;
        contains_notes: string;
        no_of_adults: string;
        no_of_rooms: string;
        is_wizard_booking: string;
    }>;
}
