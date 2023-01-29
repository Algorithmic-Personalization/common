export type IndividualExperimentConfig = {
	arm: 'control' | 'treatment';
	nonPersonalizedProbability: number;
};

export default IndividualExperimentConfig;
