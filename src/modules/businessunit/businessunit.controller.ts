import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { BusinessunitService } from './businessunit.service';
import { BusinessUnit } from './businessunit.model';
import { CreateBusinessUnitDto } from './dto/create-businessunit.dto';
import { UpdateBusinessUnitDto } from './dto/update-businessunit.dto';

@Controller('businessunit')
export class BusinessunitController {

    constructor(private businessunitService: BusinessunitService) {}

    // GET businessunit/id
    // POST businessunit
    // PATCH businessunit/id
    // DELETE


    @Get()
    async getAllUsers(): Promise<BusinessUnit[]> {
        return this.businessunitService.getAllBusinessUnit();
    }

        // @Get(':id')
        // async findOne(): Promise<BusinessUnit[]> {
        //     return this.businessunitService.getBusinessUnit();
        // }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<BusinessUnit> {
        return this.businessunitService.getBusinessUnit(id);
    }

    @Post()
    create(@Body() createBusinessUnitDto: CreateBusinessUnitDto) {
        return this.businessunitService.createBusinessUnit(createBusinessUnitDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateBusinessUnitDto: UpdateBusinessUnitDto) {
        return this.businessunitService.updateBusinessUnit(id, updateBusinessUnitDto);
    }

}
