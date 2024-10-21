import { PrismaService } from 'prisma/prisma.service';
import { Booking } from '@prisma/client';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking-dto';
export declare class BookingService {
    private readonly prisma;
    private booking;
    constructor(prisma: PrismaService);
    getAllBooking(): Promise<Booking[]>;
    getBooking(id: string): Promise<Booking>;
    createBooking(createBookingDto: CreateBookingDto): Promise<Booking>;
    updateBooking(id: string, updateBookingDto: UpdateBookingDto): Promise<Booking>;
}
