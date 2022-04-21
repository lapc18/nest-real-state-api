import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Owner } from 'src/models/owner.entity';
import { OwnerService } from './owner.service';

@Controller('owner')
export class OwnerController {

    constructor(
        private service: OwnerService
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
    create(@Body() owner: Owner) {
        return this.service.saveOrUpdate(owner);
    }

    @Put()
    update(@Body() owner: Owner) {
        return this.service.saveOrUpdate(owner);
    }

    @Delete() 
    remove(@Param() params: any) {
        return this.service.remove(params.id);
    }


}
