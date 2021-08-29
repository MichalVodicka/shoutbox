import {
    Entity,
    BaseEntity,
    PrimaryColumn,
    Column,
    ManyToOne,
    JoinColumn, PrimaryGeneratedColumn,
} from "typeorm";
import {Meta} from "./meta";


@Entity({ name: "message" })
export class Message extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    content!: string;


    @Column()
    name!: string;

    @Column()
    meta_id!: number;

    @Column({type:"timestamptz"})
    created_at!: Date;

    @ManyToOne(() => Meta, (meta) => meta.message)
    @JoinColumn({ name: "meta_id" })
    meta!: Meta;
}
