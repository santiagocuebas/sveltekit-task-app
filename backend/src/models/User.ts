import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn
} from 'typeorm';
import { IUser } from '../global.js';

@Entity()
export class User extends BaseEntity implements IUser {
  @PrimaryColumn('varchar')
  id!: string;

  @Column('varchar')
  firstname!: string;

  @Column('varchar')
  lastname!: string;

  @Column('varchar', { unique: true })
  email!: string;

  @Column('varchar')
  private password!: string;

  @CreateDateColumn()
  createdAt!: Date;

  get getPassword() {
    return this.password;
  }
}
