import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Owner } from "src/models/owner.entity";
import { Repository } from "typeorm";

@Injectable()
export class OwnerService {

    constructor(
        @InjectRepository(Owner) private ownerRepository: Repository<Owner>
    ){}

    findAll(): Promise<Owner[]> {
        return this.ownerRepository.find();
    }

    findOne(id: number): Promise<Owner> {
        return this.ownerRepository.findOne(id);
    }

    async saveOrUpdate(owner: Owner): Promise<Owner> {
       return await this.ownerRepository.save(owner);
    }

    async remove(id: string): Promise<void> {
        await this.ownerRepository.softDelete(id);
    }

}