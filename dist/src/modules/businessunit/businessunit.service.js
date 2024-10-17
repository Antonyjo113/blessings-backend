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
exports.BusinessunitService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let BusinessunitService = class BusinessunitService {
    constructor(prisma) {
        this.prisma = prisma;
        this.businessUnit = [];
    }
    async getAllBusinessUnit() {
        try {
            const data = await this.prisma.businessUnit.findMany();
            return data;
        }
        catch (error) {
            console.error('Error fetching users:', error);
            throw new Error('Failed to fetch users');
        }
    }
    async getBusinessUnit(id) {
        try {
            const data = await this.prisma.businessUnit.findUnique({
                where: { id },
            });
            if (!data) {
                throw new common_1.NotFoundException(`Business Unit with ID ${id} not found`);
            }
            return data;
        }
        catch (error) {
            console.error('Error fetching business unit:', error);
            throw new Error('Failed to fetch business unit');
        }
    }
    async createBusinessUnit(createBusinessUnitDto) {
        try {
            return await this.prisma.businessUnit.create({
                data: createBusinessUnitDto,
            });
        }
        catch (error) {
            console.error('Error creating business unit:', error);
            throw new Error('Failed to create business unit');
        }
    }
    async updateBusinessUnit(id, updateBusinessUnitDto) {
        try {
            const data = await this.prisma.businessUnit.update({
                where: { id },
                data: updateBusinessUnitDto,
            });
            return data;
        }
        catch (error) {
            console.error('Error updating business unit:', error);
            throw new common_1.NotFoundException(`Business Unit with ID ${id} not found`);
        }
    }
};
exports.BusinessunitService = BusinessunitService;
exports.BusinessunitService = BusinessunitService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BusinessunitService);
//# sourceMappingURL=businessunit.service.js.map