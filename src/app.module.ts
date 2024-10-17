import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { BusinessunitModule } from './modules/businessunit/businessunit.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    BusinessunitModule
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
