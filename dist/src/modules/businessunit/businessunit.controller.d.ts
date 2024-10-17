import { BusinessunitService } from './businessunit.service';
import { BusinessUnit } from './businessunit.model';
import { CreateBusinessUnitDto } from './dto/create-businessunit.dto';
import { UpdateBusinessUnitDto } from './dto/update-businessunit.dto';
export declare class BusinessunitController {
    private businessunitService;
    constructor(businessunitService: BusinessunitService);
    getAllUsers(): Promise<BusinessUnit[]>;
    findOne(id: string): Promise<BusinessUnit>;
    create(createBusinessUnitDto: CreateBusinessUnitDto): Promise<{
        id: string;
        name: string;
        place: string;
    }>;
    update(id: string, updateBusinessUnitDto: UpdateBusinessUnitDto): Promise<{
        id: string;
        name: string;
        place: string;
    }>;
}
