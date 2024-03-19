import Event, {EventType} from './event';
import {type RecommendationBase} from '../types/Recommendation';

export class RecommendationsEvent extends Event {
	constructor(
		public readonly nonPersonalized: RecommendationBase[],
		public readonly personalized: RecommendationBase[],
	) {
		super();
		this.type = EventType.RECOMMENDATIONS_SHOWN;
	}
}

export default RecommendationsEvent;
