import { Injectable, NotFoundException } from '@nestjs/common';
import { UserStatus } from './user.model';
import { v1 as uuid } from  'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { NotFoundError } from 'rxjs';
import { PrismaService } from 'prisma/prisma.service';
import { User } from '@prisma/client';
import { LoginDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    private users : User[] = [];

    constructor(private readonly prisma: PrismaService) {}  


    async getAllUsers(): Promise<User[]> {
        try {
            const data = await this.prisma.user.findMany();
            console.log('1111111', data);
            return data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw new Error('Failed to fetch users');
        }
    }

    async userAuthenticate(loginDto: LoginDto): Promise<object> {
        const { email, password } = loginDto;
    
        try {
            const user = await this.prisma.user.findUnique({ where: { email } });
            console.log('111111', user);
            const data = {
                "success": true,
                "username": user.email,
                "role": user.role
            }
            return data;
        } catch (error) {
          console.error('Error Authentican user:', error);
          const errordata = {
            "success": false,
            "error": error,
            "message": 'Error Authentican user'
          }
          return errordata;
        }
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const { name, email, role, password } = createUserDto;
        
        try {
          const user = await this.prisma.user.create({
            data: {
              name,
              email,
              status: UserStatus.ACTIVE,
              role,
              password
            },
          });
          return user;
        } catch (error) {
          console.error('Error creating user:', error);
          throw new Error('Failed to create user');
        }
    }

    async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
      try {
          const data = await this.prisma.user.update({
              where: { id },
              data: updateUserDto,
          });
          return data;
      } catch (error) {
          console.error('Error updating business unit:', error);
          throw new NotFoundException(`Business Unit with ID ${id} not found`);
      }
  }

    // getAllUsers(): User[] {
    //     return this.users;
    // }

    // createUser( createUserDto: CreateUserDto) {
        
    //     const { name, email } = createUserDto;

    //     const user: User = {
    //         id: uuid(),
    //         name,
    //         email,
    //         status: UserStatus.ACTIVE
    //     }
    //     this.users.push(user)
    //     return user;

    // }

    getUserById( id: string ): User {
        const found =  this.users.find(user => user.id === id);
        if(!found){
            throw new NotFoundException("Can't found the User");
        }
        return found;
    }

    deleteUser( id: string): void {
        const found =  this.getUserById(id);
        this.users = this.users.filter(user => user.id !== found.id);
    }

    updateUserStatus( id: string, status: UserStatus): User {
        const user = this.getUserById(id);
        user.status = status;
        return user;
    }
}
