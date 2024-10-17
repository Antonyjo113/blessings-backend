import { PrismaService } from 'prisma/prisma.service';
import { BusinessUnit } from '@prisma/client';
import { CreateBusinessUnitDto } from './dto/create-businessunit.dto';
import { UpdateBusinessUnitDto } from './dto/update-businessunit.dto';
export declare class BusinessunitService {
    private readonly prisma;
    private businessUnit;
    constructor(prisma: PrismaService);
    getAllBusinessUnit(): Promise<BusinessUnit[]>;
    getBusinessUnit(id: string): Promise<BusinessUnit>;
    createBusinessUnit(createBusinessUnitDto: CreateBusinessUnitDto): Promise<BusinessUnit>;
    updateBusinessUnit(id: string, updateBusinessUnitDto: UpdateBusinessUnitDto): Promise<BusinessUnit>;
}
