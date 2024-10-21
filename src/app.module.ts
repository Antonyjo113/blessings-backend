import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { BusinessunitModule } from './modules/businessunit/businessunit.module';
import { BookingModule } from './modules/booking/booking.module';
import { BookingController } from './modules/booking/booking.controller';
import { BookingService } from './modules/booking/booking.service';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    BusinessunitModule,
    BookingModule
  
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class AppModule {}
