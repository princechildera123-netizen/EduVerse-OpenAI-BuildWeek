export type ChatRole = 'student' | 'twin';
export type ChatMessage = { id: string; role: ChatRole; content: string; timestamp: string };
export type LearningTwinInsights = { strengths: string[]; weaknesses: string[]; confidenceScore: number; attentionLevel: number; learningStyle: string; recommendedNextLesson: string; studyRecommendations: string[] };
export type LearningTwinProvider = { getInsights: () => Promise<LearningTwinInsights>; sendMessage: (messages: ChatMessage[], prompt: string) => Promise<ChatMessage> };
