import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Booking } from '@prisma/client';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking-dto';

@Injectable()
export class BookingService {

    private booking : Booking[] = [];

    constructor(private readonly prisma: PrismaService) {}

    async getAllBooking(): Promise<Booking[]> {
        try {
            const data = await this.prisma.booking.findMany();
            return data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw new Error('Failed to fetch users');
        }
    }

    async getBooking(id: string): Promise<Booking> {
        try {
            const data = await this.prisma.booking.findUnique({
                where: { id },
            });
            if (!data) {
                throw new NotFoundException(`Booking with ID ${id} not found`);
            }
            return data;
        } catch (error) {
            console.error('Error fetching Booking:', error);
            throw new Error('Failed to fetch Booking');
        }
    }


    async createBooking(createBookingDto: CreateBookingDto): Promise<Booking> {
        try {
            return await this.prisma.booking.create({
                data: createBookingDto,
            });
        } catch (error) {
            console.error('Error creating Booking:', error);
            throw new Error('Failed to create Booking');
        }
    }

    async updateBooking(id: string, updateBookingDto: UpdateBookingDto): Promise<Booking> {
        try {
            const data = await this.prisma.booking.update({
                where: { id },
                data: updateBookingDto,
            });
            return data;
        } catch (error) {
            console.error('Error updating Booking:', error);
            throw new NotFoundException(`Booking with ID ${id} not found`);
        }
    }

}
