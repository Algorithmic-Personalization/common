import Event, {EventType} from './event';
import type {RecommendationBase} from '../types/Recommendation';

export class HomeShownEvent extends Event {
	constructor(
		public readonly defaultRecommendations: RecommendationBase[],
		public readonly replacementSource: RecommendationBase[],
	) {
		super();
		this.type = EventType.HOME_SHOWN;
	}
}

export default HomeShownEvent;
