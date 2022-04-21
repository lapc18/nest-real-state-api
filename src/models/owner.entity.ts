import { type } from "os";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";


@Entity()
export class Owner {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({unique: true})
    public email: string;

    @Column()
    public profile: string;

    @Column()
    public name: string;

    @Column()
    public lastName: string;

    @Column()
    public phone: string;

    @Column()
    public description: string;

    @OneToMany(type => Property, properties => properties.owner)
    public properties: Property[];

    @Column({default: true}) 
    isActive:boolean;
}