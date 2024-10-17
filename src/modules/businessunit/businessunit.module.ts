import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { BusinessunitController } from './businessunit.controller';
import { BusinessunitService } from './businessunit.service';

@Module({
    imports: [PrismaModule],
    controllers: [BusinessunitController],
    providers: [BusinessunitService]
})
export class BusinessunitModule {}
