export type PredictionDetail = { why: string; evidence: string; recommendedAction: string };
export type ExamPrediction = { subject: string; predictedScore: number; confidence: number; passProbability: number; burnoutRisk: number; dropoutRisk: number; weakTopics: string[]; strongTopics: string[]; details: Record<string, PredictionDetail> };
