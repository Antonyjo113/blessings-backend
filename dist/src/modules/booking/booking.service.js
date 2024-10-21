"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let BookingService = class BookingService {
    constructor(prisma) {
        this.prisma = prisma;
        this.booking = [];
    }
    async getAllBooking() {
        try {
            const data = await this.prisma.booking.findMany();
            return data;
        }
        catch (error) {
            console.error('Error fetching users:', error);
            throw new Error('Failed to fetch users');
        }
    }
    async getBooking(id) {
        try {
            const data = await this.prisma.booking.findUnique({
                where: { id },
            });
            if (!data) {
                throw new common_1.NotFoundException(`Booking with ID ${id} not found`);
            }
            return data;
        }
        catch (error) {
            console.error('Error fetching Booking:', error);
            throw new Error('Failed to fetch Booking');
        }
    }
    async createBooking(createBookingDto) {
        try {
            return await this.prisma.booking.create({
                data: createBookingDto,
            });
        }
        catch (error) {
            console.error('Error creating Booking:', error);
            throw new Error('Failed to create Booking');
        }
    }
    async updateBooking(id, updateBookingDto) {
        try {
            const data = await this.prisma.booking.update({
                where: { id },
                data: updateBookingDto,
            });
            return data;
        }
        catch (error) {
            console.error('Error updating Booking:', error);
            throw new common_1.NotFoundException(`Booking with ID ${id} not found`);
        }
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookingService);
//# sourceMappingURL=booking.service.js.map