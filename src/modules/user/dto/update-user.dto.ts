import { IsNotEmpty } from "class-validator";

export class UpdateUserDto {

    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    role: string;

    @IsNotEmpty()
    password: string;
}