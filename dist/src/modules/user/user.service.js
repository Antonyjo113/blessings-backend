"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("./user.model");
const prisma_service_1 = require("../../../prisma/prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
        this.users = [];
    }
    async getAllUsers() {
        try {
            const data = await this.prisma.user.findMany();
            console.log('1111111', data);
            return data;
        }
        catch (error) {
            console.error('Error fetching users:', error);
            throw new Error('Failed to fetch users');
        }
    }
    async userAuthenticate(loginDto) {
        const { email, password } = loginDto;
        try {
            const user = await this.prisma.user.findUnique({ where: { email } });
            console.log('111111', user);
            const data = {
                "success": true,
                "username": user.email,
                "role": user.role
            };
            return data;
        }
        catch (error) {
            console.error('Error Authentican user:', error);
            const errordata = {
                "success": false,
                "error": error,
                "message": 'Error Authentican user'
            };
            return errordata;
        }
    }
    async createUser(createUserDto) {
        const { name, email } = createUserDto;
        try {
            const user = await this.prisma.user.create({
                data: {
                    name,
                    email,
                    status: user_model_1.UserStatus.ACTIVE,
                },
            });
            return user;
        }
        catch (error) {
            console.error('Error creating user:', error);
            throw new Error('Failed to create user');
        }
    }
    getUserById(id) {
        const found = this.users.find(user => user.id === id);
        if (!found) {
            throw new common_1.NotFoundException("Can't found the User");
        }
        return found;
    }
    deleteUser(id) {
        const found = this.getUserById(id);
        this.users = this.users.filter(user => user.id !== found.id);
    }
    updateUserStatus(id, status) {
        const user = this.getUserById(id);
        user.status = status;
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map