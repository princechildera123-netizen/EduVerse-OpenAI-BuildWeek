import { useEffect, useMemo, useState } from 'react';
import { mockLearningTwinProvider } from '../services/mockLearningTwinProvider';
import type { ChatMessage, LearningTwinInsights, LearningTwinProvider } from '../types/learningTwin';

export function useLearningTwin(provider: LearningTwinProvider = mockLearningTwinProvider) {
  const [insights, setInsights] = useState<LearningTwinInsights | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => { provider.getInsights().then(setInsights); }, [provider]);

  const suggestedPrompts = useMemo(() => ['Explain my weakest topic', 'Plan a 25-minute study session', 'What should I review before algebra?'], []);

  async function sendMessage(prompt: string) {
    const studentMessage: ChatMessage = { id: crypto.randomUUID(), role: 'student', content: prompt, timestamp: new Date().toISOString() };
    const nextMessages = [...messages, studentMessage];
    setMessages(nextMessages);
    setIsThinking(true);
    const response = await provider.sendMessage(nextMessages, prompt);
    setMessages([...nextMessages, response]);
    setIsThinking(false);
  }

  return { insights, messages, isThinking, suggestedPrompts, sendMessage };
}
