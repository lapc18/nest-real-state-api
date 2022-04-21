import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Property } from 'src/models/property.entity';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {

    constructor(
        private service: PropertiesService
    ){}

    @Get('/')
    getAll() {
        return this.service.findAll();
    }

    @Get(':id')
    get(@Param() params: any) {

        // if(params!.id) return null;

        return this.service.findOne(params.id);
    }

    @Post()
    create(@Body() property: Property) {
        return this.service.saveOrUpdate(property);
    }

    @Put()
    update(@Body() property: Property) {
        return this.service.saveOrUpdate(property);
    }

    @Delete() 
    remove(@Param() params: any) {
        return this.service.remove(params.id);
    }


}
