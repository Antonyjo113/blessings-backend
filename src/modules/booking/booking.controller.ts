import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking-dto';

// import { BookingService } from './businessunit.service';
// import { BusinessUnit } from './businessunit.model';
// import { CreateBusinessUnitDto } from './dto/create-businessunit.dto';
// import { UpdateBusinessUnitDto } from './dto/update-businessunit.dto';

@Controller('booking')
export class BookingController {

    constructor(private bookingService: BookingService) {}

    @Post()
    async create(@Body() createBookingDto: CreateBookingDto): Promise<Booking> {
        return this.bookingService.createBooking(createBookingDto);
    }

    @Get()
     async getAll(): Promise<Booking[]> {
        return this.bookingService.getAllBooking();
    }

    @Get(':id')
    async get(@Param('id') id: string): Promise<Booking> {
        return this.bookingService.getBooking(id);
    }


    // @Get()
    // get(): Promise<Booking[]> {
    //     return this.bookingService.getAllBooking();
    // }

    //     // @Get(':id')
    //     // async findOne(): Promise<Booking[]> {
    //     //     return this.BookingService.getBooking();
    //     // }

    // @Get(':id')
    // findOne(@Param('id') id: string): Promise<Booking> {
    //     return this.bookingService.getBooking(id);
    // }

    // @Post()
    // create(@Body() createBookingDto: CreateBookingDto) {
    //     return this.bookingService.createBooking(createBookingDto);
    // }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
        return this.bookingService.updateBooking(id, updateBookingDto);
    }

}