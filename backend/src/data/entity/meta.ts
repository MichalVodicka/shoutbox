import {
    Entity,
    BaseEntity,
    PrimaryColumn,
    Column,
    ManyToOne,
    JoinColumn, OneToMany, PrimaryGeneratedColumn,
} from "typeorm";
import {Message} from "./message";

@Entity({ name: "shoutbox.meta" })
export class Meta extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    ip!: string;

    @Column()
    user_agent!: string;

    @OneToMany((_type) => Message, (msg) => msg.meta, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "id" })
    message!: Message;
}
