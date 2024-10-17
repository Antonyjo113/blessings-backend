import { PipeTransform } from "@nestjs/common";
import { UserStatus } from "../user.model";
export declare class UserStatusValidationStatus implements PipeTransform {
    readonly StatusOption: UserStatus[];
    private isStatusValid;
    transform(value: any, metadata: any): void;
}
