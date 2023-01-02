import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  Relation
} from 'typeorm';
import { IUser } from '../global.js';
import { Link } from './Link.js';


@Entity()
export class User extends BaseEntity implements IUser {
  @PrimaryColumn('varchar')
  declare id: string;

  @Column('varchar')
  declare firstname: string;

  @Column('varchar')
  declare lastname: string;

  @Column('varchar', { unique: true })
  declare email: string;

  @Column('varchar')
  declare password: string;

  @CreateDateColumn()
  declare createdAt: Date;

  @OneToMany(() => Link, (link) => link.author)
  declare links: Relation<Link[]>;
}
