import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyImage } from 'src/models/property-imgs.entity';
import { Property } from 'src/models/property.entity';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Property, PropertyImage])
    ],
    exports: [
        TypeOrmModule
    ],
    providers: [PropertiesService],
    controllers: [PropertiesController]
})
export class PropertiesModule {}
