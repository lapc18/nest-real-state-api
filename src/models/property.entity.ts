import { type } from "os";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Owner } from "./owner.entity";

@Entity()
export class Property {
    @PrimaryGeneratedColumn()
    public id: number;
    
    @Column()
    public title: string;

    @Column()
    public description: string;

    @Column()
    public address: string;

    @Column()
    public area: string;

    @Column()
    public city: string;

    @Column()
    public bedroomsCount: number;

    @Column()
    public bathroomsCount: number;

    @Column()
    public garageCount: number;

    @Column()
    public image: string;

    @Column()
    public amount: number;

    @Column()
    public purpose: string;

    @Column()
    public type: string;

    @ManyToOne(type => Owner, owner => owner.properties)
    public owner: Owner;

    @Column({default: true}) 
    isActive:boolean;
}