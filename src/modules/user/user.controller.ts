import { Body, Controller, Get, Param, Post, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User, UserStatus } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UserStatusValidationStatus } from './pipes/user-status-validation.pipe';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    // @Get()
    // getAllUsers(): User[]{
    //     // return this.userService.getAllUsers();
    //     return [];
    // }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @Post('/authenticate')
    async loginUser(@Body() LoginDto: LoginDto): Promise<object> {
        return this.userService.userAuthenticate(LoginDto);
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto);
    }
    // createUser( 
    //     // @Body('name') name: string,
    //     // @Body('email') email: string
    //     @Body () createUserDto : CreateUserDto
    
    // ) : User {
    //     return this.userService.createUser(createUserDto);
    // }

    @Get('/:id')
    getUserById(@Param('id') id:string): User {
        return this.userService.getUserById(id);
    }

    @Get('/:id')
    deleteUser(@Param('id') id:string): void {
        this.userService.deleteUser(id);
    }

    @Patch(':id/status')
    updateUserStatus(
        @Param('id') id: string,
        @Body('status', UserStatusValidationStatus) status: UserStatus
    ) {
        return this.userService.updateUserStatus(id, status);
    }

    @Patch(':id')
    updateUser(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto
    ) {
        return this.userService.updateUser(id, updateUserDto);
    }
}
