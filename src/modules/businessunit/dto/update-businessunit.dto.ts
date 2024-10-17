import { IsNotEmpty } from "class-validator";

export class UpdateBusinessUnitDto {

    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    place: string;
}