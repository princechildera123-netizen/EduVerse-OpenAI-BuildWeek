import { useState } from 'react';
import { localNotesService } from '../services/localNotesService';
import type { GeneratedNotes } from '../types/aiNotes';

function createMockNotes(source: string): GeneratedNotes {
  const topic = source.trim().split(/\s+/).slice(0, 4).join(' ') || 'uploaded notes';
  return { id: crypto.randomUUID(), source: topic, summary: `This mock summary condenses the core idea of ${topic} into a short revision-friendly explanation.`, flashcards: [{ front: `What is the main idea of ${topic}?`, back: 'Identify the central concept, supporting details, and one example.' }, { front: 'How should you revise it?', back: 'Use active recall, then answer a practice question.' }], keyPoints: ['Define the core concept', 'Connect evidence to examples', 'Review weak vocabulary'], practiceQuestions: ['Explain the topic in your own words.', 'Create one example and one non-example.'], revisionSheet: ['Read summary', 'Review flashcards', 'Answer practice questions', 'Mark unclear points'], createdAt: new Date().toISOString() };
}

export function useAiNotes() {
  const [text, setText] = useState('');
  const [generated, setGenerated] = useState<GeneratedNotes | null>(null);
  const [savedNotes, setSavedNotes] = useState<GeneratedNotes[]>(() => localNotesService.list());
  function generate() { const note = createMockNotes(text); setGenerated(note); }
  function save() { if (!generated) return; setSavedNotes(localNotesService.save(generated)); }
  return { text, setText, generated, savedNotes, generate, save };
}
