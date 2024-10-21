import { IsNotEmpty } from "class-validator";

export class CreateBusinessUnitDto {

    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    place: string;

    @IsNotEmpty()
    status: string;
}