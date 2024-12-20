import { registerElement } from '@nativescript/core';

export function registerElements() {
  registerElement('note-card', () => require('./features/notes/components/note-card.xml').default);
  registerElement('category-list', () => require('./features/notes/components/category-list.xml').default);
  registerElement('note-list', () => require('./features/notes/components/note-list.xml').default);
}