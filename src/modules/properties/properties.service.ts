import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Property } from "src/models/property.entity";
import { Repository } from "typeorm";

@Injectable()
export class PropertiesService {

    constructor(
        @InjectRepository(Property) private propertyRepository: Repository<Property>
    ){}

    findAll(): Promise<Property[]> {
        return this.propertyRepository.find();
    }

    findOne(id: number): Promise<Property> {
        return this.propertyRepository.findOne(id);
    }

    async saveOrUpdate(property: Property): Promise<Property> {
       return await this.propertyRepository.save(property);
    }

    async remove(id: string): Promise<void> {
        await this.propertyRepository.softDelete(id);
    }
}