import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { BusinessUnit } from '@prisma/client';
import { CreateBusinessUnitDto } from './dto/create-businessunit.dto';
import { UpdateBusinessUnitDto } from './dto/update-businessunit.dto';

@Injectable()
export class BusinessunitService {

    private businessUnit : BusinessUnit[] = [];

    constructor(private readonly prisma: PrismaService) {}

    async getAllBusinessUnit(): Promise<BusinessUnit[]> {
        try {
            const data = await this.prisma.businessUnit.findMany();
            return data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw new Error('Failed to fetch users');
        }
    }

    async getBusinessUnit(id: string): Promise<BusinessUnit> {
        try {
            const data = await this.prisma.businessUnit.findUnique({
                where: { id },
            });
            if (!data) {
                throw new NotFoundException(`Business Unit with ID ${id} not found`);
            }
            return data;
        } catch (error) {
            console.error('Error fetching business unit:', error);
            throw new Error('Failed to fetch business unit');
        }
    }


    async createBusinessUnit(createBusinessUnitDto: CreateBusinessUnitDto): Promise<BusinessUnit> {
        try {
            return await this.prisma.businessUnit.create({
                data: createBusinessUnitDto,
            });
        } catch (error) {
            console.error('Error creating business unit:', error);
            throw new Error('Failed to create business unit');
        }
    }

    async updateBusinessUnit(id: string, updateBusinessUnitDto: UpdateBusinessUnitDto): Promise<BusinessUnit> {
        try {
            const data = await this.prisma.businessUnit.update({
                where: { id },
                data: updateBusinessUnitDto,
            });
            return data;
        } catch (error) {
            console.error('Error updating business unit:', error);
            throw new NotFoundException(`Business Unit with ID ${id} not found`);
        }
    }

    // async getBusinessUnit(): Promise<BusinessUnit[]> {
    //     try {
    //         const data = await this.prisma.businessUnit.findMany();
    //         console.log('1111111', data);
    //         return data;
    //     } catch (error) {
    //         console.error('Error fetching users:', error);
    //         throw new Error('Failed to fetch users');
    //     }
    // }

    // async createBusinessUnit(): Promise<BusinessUnit[]> {
    //     try {
    //         const data = await this.prisma.businessUnit.findMany();
    //         console.log('1111111', data);
    //         return data;
    //     } catch (error) {
    //         console.error('Error fetching users:', error);
    //         throw new Error('Failed to fetch users');
    //     }
    // }

    // async updateBusinessUnit(): Promise<BusinessUnit[]> {
    //     try {
    //         const data = await this.prisma.businessUnit.findMany();
    //         console.log('1111111', data);
    //         return data;
    //     } catch (error) {
    //         console.error('Error fetching users:', error);
    //         throw new Error('Failed to fetch users');
    //     }
    // }


}
