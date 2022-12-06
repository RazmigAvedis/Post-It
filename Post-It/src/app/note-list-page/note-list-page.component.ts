import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/Models/note';
import { NoteList } from 'src/Models/NoteList';
import { Page } from '../app.component';

@Component({
  selector: 'app-note-list-page',
  templateUrl: './note-list-page.component.html',
  styleUrls: ['./note-list-page.component.css']
})
export class NoteListPageComponent implements OnInit{
  notesList: NoteList=new NoteList()
  note!:Note;
  update_note!:Note
  current_page:Page=Page.Home
  page_type=Page

  constructor(private router:Router){
    var values = [],
        keys = Object.keys(localStorage)

    var i=0;
    do{
        var elt=localStorage.getItem(keys[i]);
        if(elt!=null)
        {
          console.log(elt)
          var elt_json= JSON.parse(elt)
          this.note=new Note(elt_json.title,elt_json.text)
          this.note.id=keys[i]
          console.log(this.note)
          console.log(this.note.id)
          this.notesList.add(this.note)
        }
        i++;
    }while(i<keys.length)
  }
  


  ngOnInit(): void{
  }

  addNoteChangePage(){
    this.current_page=Page.Create
  }

  getNote(note:any)
  {
    this.update_note=note
    console.log("Got note:")
    console.log(this.update_note)
  }

  updateNote(note:any)
  {
    this.notesList.update(note)
  }

  addNote(note:any){
    this.notesList.add(note)
  }
  
  deleteNote(note:Note)
  {
    this.notesList.delete(note)
  }
  

change_page_state(page:any){
  console.log("Changed states")
  this.current_page=page
  this.ngOnInit();
}

}
