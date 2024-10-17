export interface User {
    id: string;
    name: string;
    email: string;
    status: string;
}
export declare enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
