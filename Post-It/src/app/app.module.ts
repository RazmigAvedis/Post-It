import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import {MatIconModule} from '@angular/material/icon';
import { AddNotePageComponent } from './add-note-page/add-note-page.component';
import { UpdateNotePageComponent } from './update-note-page/update-note-page.component';
import { NoteListPageComponent } from './note-list-page/note-list-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotesListComponent,
    AddNotePageComponent,
    UpdateNotePageComponent,
    NoteListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
