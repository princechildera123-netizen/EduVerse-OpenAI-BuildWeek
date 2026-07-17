import type { GeneratedNotes } from '../types/aiNotes';

const STORAGE_KEY = 'eduverse-saved-notes';

export const localNotesService = {
  list(): GeneratedNotes[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) as GeneratedNotes[] : [];
  },
  save(note: GeneratedNotes) {
    const notes = [note, ...localNotesService.list()].slice(0, 12);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    return notes;
  },
};
