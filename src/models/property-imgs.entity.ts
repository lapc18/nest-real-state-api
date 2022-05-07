import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";

@Entity()
export class PropertyImage {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({default: ""}) 
    public image:string;

    @ManyToOne(() => Property, property => property.images)
    public property: Property;

    @Column({default: true}) 
    isActive:boolean;
}