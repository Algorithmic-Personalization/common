import Event, {EventType} from './event';
import type Recommendation from '../types/Recommendation';

export class HomeShownEvent extends Event {
	constructor(
		public readonly defaultRecommendations: Recommendation[],
		public readonly replacementSource: Recommendation[],
	) {
		super();
		this.type = EventType.HOME_SHOWN;
	}
}

export default HomeShownEvent;
