export type RecommendationBase = {
	title: string;
	url: string;
	videoId: string;
};

export type Recommendation = RecommendationBase & {
	channelName: string;
	miniatureUrl: string;
	hoverAnimationUrl?: string;
	views: string;
	publishedSince: string;
	// Flag 'unknown' is only used before the recommendations can be distinguished
	personalization: 'personalized' | 'non-personalized' | 'mixed' | 'unknown';
	channelMiniatureUrl?: string;
	channelShortName?: string;
};

export default Recommendation;
