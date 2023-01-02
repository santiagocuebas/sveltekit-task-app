import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  Relation,
  UpdateDateColumn
} from 'typeorm';
import { ILink } from '../global.js';
import { User } from './index.js';

@Entity()
export class Link extends BaseEntity implements ILink {
  @PrimaryColumn('varchar')
  declare id: string;

  @Column('varchar')
  declare title: string;

  @Column('varchar')
  declare url: string;

  @Column('varchar')
  declare description: string;

  @CreateDateColumn()
  declare createdAt: Date;

  @UpdateDateColumn()
  declare updatedAt: Date;

  @ManyToOne(() => User, (user) => user.links)
  declare author: Relation<User>;
}
