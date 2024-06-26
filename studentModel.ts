import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('Student')
export class Student {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    studentName!: string;

    // @Column()
    // startDate!: string;

    // @Column()
    // lastDate!: string;

    // @Column()
    // finishDate!: string;

}