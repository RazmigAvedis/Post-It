import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotePageComponent } from './add-note-page/add-note-page.component';
import { NoteListPageComponent } from './note-list-page/note-list-page.component';
import { NotesListComponent } from './notes-list/notes-list.component';

const routes: Routes = [
  { path: '', component: NoteListPageComponent},
  { path: 'create', component: AddNotePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }