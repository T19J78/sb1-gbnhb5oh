import { Observable } from '@nativescript/core';
import { Note, Category } from '../models/note.model';
import { DEFAULT_CATEGORIES } from '../../../core/constants/categories';
import { getCurrentTimestamp } from '../../../core/utils/date.utils';
import { generateId } from '../../../core/utils/id.utils';

export class NotesService extends Observable {
  private notes: Note[] = [];
  private categories: Category[] = [...DEFAULT_CATEGORIES];

  getAllNotes(): Note[] {
    return [...this.notes];
  }

  getNoteById(id: string): Note | undefined {
    return this.notes.find(note => note.id === id);
  }

  addNote(note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Note {
    const newNote: Note = {
      ...note,
      id: generateId(),
      createdAt: getCurrentTimestamp(),
      updatedAt: getCurrentTimestamp()
    };
    this.notes.unshift(newNote);
    this.notifyPropertyChange('notes', this.notes);
    return newNote;
  }

  updateNote(id: string, updates: Partial<Note>): Note | undefined {
    const index = this.notes.findIndex(note => note.id === id);
    if (index !== -1) {
      this.notes[index] = {
        ...this.notes[index],
        ...updates,
        updatedAt: getCurrentTimestamp()
      };
      this.notifyPropertyChange('notes', this.notes);
      return this.notes[index];
    }
    return undefined;
  }

  deleteNote(id: string): boolean {
    const index = this.notes.findIndex(note => note.id === id);
    if (index !== -1) {
      this.notes.splice(index, 1);
      this.notifyPropertyChange('notes', this.notes);
      return true;
    }
    return false;
  }

  getCategories(): Category[] {
    return [...this.categories];
  }
}