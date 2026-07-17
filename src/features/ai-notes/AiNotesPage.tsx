import { DashboardHero } from '../shared-dashboard/components/DashboardPrimitives';
import { GeneratedNotesPanel, NotesInputPanel, SavedNotesPanel } from './components/AiNotesComponents';
import { useAiNotes } from './hooks/useAiNotes';

export function AiNotesPage() {
  const notes = useAiNotes();
  return <div className="py-8 sm:py-12"><DashboardHero eyebrow="AI Notes & Flashcard Generator" title="Transform notes into revision assets." description="Paste text or use upload-only UI controls, then generate mock summaries, flashcards, key points, practice questions, and revision sheets." /><div className="mt-6 grid gap-6 lg:grid-cols-[1fr_22rem]"><main className="grid gap-6"><NotesInputPanel text={notes.text} setText={notes.setText} generate={notes.generate} /><GeneratedNotesPanel notes={notes.generated} save={notes.save} /></main><SavedNotesPanel notes={notes.savedNotes} /></div></div>;
}
