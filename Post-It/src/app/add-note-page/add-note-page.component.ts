import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/Models/note';
import { Guid} from 'guid-typescript';
import { NoteList } from 'src/Models/NoteList';
import { Page } from '../app.component';

@Component({
  selector: 'app-add-note-page',
  templateUrl: './add-note-page.component.html',
  styleUrls: ['./add-note-page.component.css']
})
export class AddNotePageComponent {
  note:Note= new Note("","");

  @Output() event = new EventEmitter<any>();
  @Output() add_note_event = new EventEmitter<any>();

  constructor(private router:Router){

  }

  onSubmit()
  {
    const epochNow = (new Date).getTime();
    this.note.id=epochNow.toString()
    this.add_note_event.emit(this.note);
    this.event.emit(Page.Home)
  }

  
  onCancel(){
    this.event.emit(Page.Home)
  }

}
