import { Column, Entity, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Menu {

    @ObjectIdColumn()
    obj_id:number;
    @PrimaryColumn()
    id:number;
    @Column()
    price:number;
    @Column()
    category:string;
    @Column()
    name:string;
}
