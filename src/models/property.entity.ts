import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Owner } from "./owner.entity";
import { PropertyImage } from "./property-imgs.entity";

@Entity()
export class Property {
    @PrimaryGeneratedColumn()
    public id: number;
    
    @Column({default: ""})
    public title: string;

    @Column({default: "", length: 500})
    public description: string;

    @Column({default: ""})
    public address: string;

    @Column({default: 0})
    public area: number;

    @Column({default: ""})
    public city: string;

    @Column({default: 0})
    public bedroomsCount: number;

    @Column({default: 0})
    public bathroomsCount: number;

    @Column({default: 0})
    public garageCount: number;

    @Column({default: 0})
    public amount: number;

    @Column({default: ""})
    public purpose: string;

    @Column({default: ""})
    public type: string;

    @ManyToOne(() => Owner, owner => owner.properties)
    public owner: Owner;

    @OneToMany(() => PropertyImage, images => images.property, {cascade: true})
    public images: PropertyImage[];

    @Column({default: true}) 
    isActive:boolean;
}