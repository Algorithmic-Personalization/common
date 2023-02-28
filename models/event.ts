/* eslint-disable @typescript-eslint/no-inferrable-types */

import {Entity, Column} from 'typeorm';
import {IsInt, IsNotEmpty, IsString, IsPositive, IsOptional} from 'class-validator';

import Model from '../lib/model';
import {uuidv4} from '../util';

export enum EventType {
	PAGE_VIEW = 'PAGE_VIEW',
	RECOMMENDATIONS_SHOWN = 'RECOMMENDATIONS_SHOWN',
	PERSONALIZED_CLICKED = 'PERSONALIZED_CLICKED',
	NON_PERSONALIZED_CLICKED = 'NON_PERSONALIZED_CLICKED',
	MIXED_CLICKED = 'MIXED_CLICKED',
	WATCH_TIME = 'WATCH_TIME',
	SESSION_END = 'SESSION_END',
}

export enum ExperimentArm {
	TREATMENT = 'treatment',
	CONTROL = 'control',
}

@Entity()
export class Event extends Model {
	@Column()
	@IsNotEmpty()
	@IsString()
		sessionUuid: string = '';

	@Column()
	@IsInt()
	@IsPositive()
		experimentConfigId: number = 0;

	@Column()
		arm: ExperimentArm = ExperimentArm.TREATMENT;

	@Column()
		type: EventType = EventType.PAGE_VIEW;

	@Column()
	@IsNotEmpty()
	@IsString()
		url: string = '';

	@Column()
	@IsString()
	@IsOptional()
		context?: string;

	@Column()
	@IsNotEmpty()
	@IsString()
		localUuid: string = uuidv4();

	@Column()
		extensionVersion?: string;
}

export default Event;
