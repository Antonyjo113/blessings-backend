import { UserStatus } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'prisma/prisma.service';
import { User } from '@prisma/client';
import { LoginDto } from './dto/login.dto';
export declare class UserService {
    private readonly prisma;
    private users;
    constructor(prisma: PrismaService);
    getAllUsers(): Promise<User[]>;
    userAuthenticate(loginDto: LoginDto): Promise<object>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUserById(id: string): User;
    deleteUser(id: string): void;
    updateUserStatus(id: string, status: UserStatus): User;
}
