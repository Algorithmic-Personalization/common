import {Column, type ObjectLiteral, PrimaryGeneratedColumn} from 'typeorm';
import {IsDate, IsInt, IsPositive} from 'class-validator';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface ModelIface extends ObjectLiteral {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}

export class Model implements ModelIface {
	@PrimaryGeneratedColumn()
	@IsInt()
	@IsPositive()
		id = 0;

	@Column()
	@IsDate()
		createdAt: Date = new Date();

	@Column()
	@IsDate()
		updatedAt: Date = new Date();
}
export default Model;
