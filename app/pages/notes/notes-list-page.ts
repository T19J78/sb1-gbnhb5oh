import { EventData, NavigatedData, Page } from '@nativescript/core';
import { NotesListViewModel } from './notes-list-view-model';

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;
  page.bindingContext = new NotesListViewModel();
}