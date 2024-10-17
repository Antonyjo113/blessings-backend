import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { UserStatus } from "../user.model";

export class UserStatusValidationStatus implements PipeTransform {
    
    readonly StatusOption = [
        UserStatus.ACTIVE,
        UserStatus.INACTIVE
    ]

    private isStatusValid(status: any) {
        const index =  this.StatusOption.indexOf(status);
        return index !== -1;
    }

    transform(value, metadata) {
        value = value.toUpperCase();
        
        if(!this.isStatusValid(value)){
            throw new BadRequestException("This status not available in the Status Option")
        }
    }
    
    // transform(value: any, metadata: ArgumentMetadata) {
    //     // console.log('value', value);
    //     // console.log('metadata', metadata);

    // }

}