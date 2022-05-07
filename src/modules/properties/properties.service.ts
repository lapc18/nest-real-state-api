import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PropertyDto } from "src/models/dtos/property.dto";
import { Property } from "src/models/property.entity";
import { deepCopy } from "src/utils/deep-copy";
import { Like, Repository } from "typeorm";

@Injectable()
export class PropertiesService {

    constructor(
        @InjectRepository(Property) private propertyRepository: Repository<Property>
    ){}

    findAll(): Promise<Property[]> {
        return this.propertyRepository.find({
            relations: ["images"]
        });
    }

    findByType(request: PropertyDto): Promise<Property[]> {

        let deepReq = deepCopy(request);
        Object.keys(deepReq).forEach((key) => {
            deepReq[key] = Like(`%${deepReq[key]}%`);
        });

        return this.propertyRepository.find({ where: {...deepReq}, relations: ['images'] });
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