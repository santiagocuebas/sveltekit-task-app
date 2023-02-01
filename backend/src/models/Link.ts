import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn
} from 'typeorm';
import { ILink } from '../global.js';

@Entity()
export class Link extends BaseEntity implements ILink {
	@PrimaryColumn('varchar')
	id!: string;

	@Column('varchar')
	authorId!: string;

	@Column('varchar')
	title!: string;

	@Column('varchar')
	url!: string;

	@Column('varchar')
	description!: string;

	@CreateDateColumn()
	createdAt!: Date;
}
