import type { ChatMessage, LearningTwinInsights, LearningTwinProvider } from '../types/learningTwin';

const insights: LearningTwinInsights = {
  strengths: ['Biology vocabulary', 'Consistent study streaks', 'Reading comprehension'],
  weaknesses: ['Quadratic graphing', 'Multi-step equation pacing'],
  confidenceScore: 82,
  attentionLevel: 76,
  learningStyle: 'Visual + practice-based',
  recommendedNextLesson: 'Graphing quadratics with vertex form',
  studyRecommendations: ['Review examples before independent practice', 'Use 25-minute focus blocks', 'Teach one concept aloud after each session'],
};

export const mockLearningTwinProvider: LearningTwinProvider = {
  async getInsights() { return insights; },
  async sendMessage(_messages: ChatMessage[], prompt: string) {
    return { id: crypto.randomUUID(), role: 'twin', content: `I would start by breaking “${prompt}” into one example, one practice problem, and one quick reflection.`, timestamp: new Date().toISOString() };
  },
};
