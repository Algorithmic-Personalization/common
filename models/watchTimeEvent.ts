import Event, {EventType} from './event';

export class WatchTimeEvent extends Event {
	constructor(
		public readonly secondsWatched: number,
	) {
		super();
		this.type = EventType.WATCH_TIME;
	}
}

export default WatchTimeEvent;
