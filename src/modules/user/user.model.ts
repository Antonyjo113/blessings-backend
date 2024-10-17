export interface User {
    id:string
    name: string
    email: string
    // age: string
    status: string
}

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}