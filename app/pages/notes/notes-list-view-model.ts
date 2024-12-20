import { Observable } from '@nativescript/core';
import { NotesService } from '../../services/notes.service';
import { Note, Category } from '../../models/note.model';

export class NotesListViewModel extends Observable {
  private notesService: NotesService;
  private _notes: Note[] = [];
  private _categories: Category[] = [];

  constructor() {
    super();
    this.notesService = new NotesService();
    this.loadNotes();
    this.loadCategories();
  }

  get notes(): Note[] {
    return this._notes;
  }

  get categories(): Category[] {
    return this._categories;
  }

  private loadNotes() {
    this._notes = this.notesService.getAllNotes();
    this.notifyPropertyChange('notes', this._notes);
  }

  private loadCategories() {
    this._categories = this.notesService.getCategories();
    this.notifyPropertyChange('categories', this._categories);
  }

  onAddNote() {
    // TODO: Navigate to note creation page
    console.log('Add note tapped');
  }

  onNoteTap(args: any) {
    const note = this._notes[args.index];
    // TODO: Navigate to note detail page
    console.log('Note tapped:', note.title);
  }

  onCategoryTap(args: any) {
    const category = args.object.bindingContext;
    // TODO: Filter notes by category
    console.log('Category tapped:', category.name);
  }
}