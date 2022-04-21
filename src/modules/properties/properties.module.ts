import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from 'src/models/property.entity';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Property])
    ],
    exports: [
        TypeOrmModule
    ],
    providers: [PropertiesService],
    controllers: [PropertiesController]
})
export class PropertiesModule {}
