import {
    Entity,
    BaseEntity,
    Column,PrimaryGeneratedColumn,
} from "typeorm";


@Entity({ name: "message" })
export class Message extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    content!: string;

    @Column()
    name!: string;

    @Column({type:"timestamptz"})
    created_at!: Date;

    @Column()
    ip!: string;

    @Column()
    user_agent!: string;
}
