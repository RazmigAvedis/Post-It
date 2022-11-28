import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/Models/note';
import { NoteList } from 'src/Models/NoteList';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  @Input('nList') notesList!: NoteList

  @Output() page_event = new EventEmitter<any>()
  @Output() note_event = new EventEmitter<any>()
  @Output() delete_event = new EventEmitter<any>()


  constructor() { }

  ngOnInit(): void {
    console.log("NotesList:")
    console.log(this.notesList)
  }

  onPageChange(page:any)
  {
    this.page_event.emit(page)
  }

  onNote(note:any)
  {
    this.note_event.emit(note)
  }

  onDelete(note:any)
  {
    this.delete_event.emit(note)
  }


}
