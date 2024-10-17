import { UserService } from './user.service';
import { User, UserStatus } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<User[]>;
    loginUser(LoginDto: LoginDto): Promise<object>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUserById(id: string): User;
    deleteUser(id: string): void;
    updateUserStatus(id: string, status: UserStatus): {
        id: string;
        name: string;
        email: string;
        status: string;
        role: string | null;
        password: string | null;
    };
}
