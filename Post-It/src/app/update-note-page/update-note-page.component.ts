import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Note } from 'src/Models/note';
import { Page } from '../app.component';

@Component({
  selector: 'app-update-note-page',
  templateUrl: './update-note-page.component.html',
  styleUrls: ['./update-note-page.component.css']
})
export class UpdateNotePageComponent implements OnChanges, OnInit {

  @Output() event = new EventEmitter()
  @Output() update_note_event = new EventEmitter()
  @Input() unote!:Note

  ngOnChanges(): void {
      console.log(this.unote)
  }
  ngOnInit(): void {
      
  }

  onSubmit()
  {
    this.event.emit(Page.Home)
    this.update_note_event.emit(this.unote)
  }

  onCancel(){
    this.event.emit(Page.Home)
  }

}
