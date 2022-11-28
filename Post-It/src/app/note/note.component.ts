import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/Models/note';
import { Page } from '../app.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input('nt') note!: Note;
  @Output() page_event = new EventEmitter<any>()
  @Output() delete_event = new EventEmitter<any>()
  @Output() note_event = new EventEmitter<any>()
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  onClick(){
    this.page_event.emit(Page.Update)
    this.note_event.emit(this.note)
  }

  onDelete(){
    this.delete_event.emit(this.note)
  }
  

}
