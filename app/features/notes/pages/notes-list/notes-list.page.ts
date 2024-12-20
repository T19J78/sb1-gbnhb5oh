import { NavigatedData, Page } from '@nativescript/core';
import { NotesListViewModel } from '../../view-models/notes-list.view-model';

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;
  page.bindingContext = new NotesListViewModel();
}