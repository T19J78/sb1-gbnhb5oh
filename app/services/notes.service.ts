import { Observable } from '@nativescript/core';
import { Note, Category } from '../models/note.model';

export class NotesService extends Observable {
  private notes: Note[] = [];
  private categories: Category[] = [
    { id: '1', name: 'Personal', color: '#FF5733' },
    { id: '2', name: 'Work', color: '#33FF57' },
    { id: '3', name: 'Ideas', color: '#3357FF' }
  ];

  getAllNotes(): Note[] {
    return [...this.notes];
  }

  getNoteById(id: string): Note | undefined {
    return this.notes.find(note => note.id === id);
  }

  addNote(note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Note {
    const newNote: Note = {
      ...note,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date()
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
        updatedAt: new Date()
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