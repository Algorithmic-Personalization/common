import Event, {EventType} from './event';

export class WatchtimeEvent extends Event {
	constructor(
		public readonly secondsWatched: number,
	) {
		super();
		this.type = EventType.WATCH_TIME;
	}
}

export default WatchtimeEvent;
