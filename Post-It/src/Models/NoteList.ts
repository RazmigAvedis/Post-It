import { Note } from "./note";
import { Guid } from "guid-typescript";

export class NoteList{
    list:Map<string,Note>=new Map<string,Note>()

add(note:Note){
    localStorage.setItem(note.id,JSON.stringify(note))
    this.list.set(note.id,note)
}

update(note:Note)
{
    localStorage.setItem(note.id,JSON.stringify(note))
    this.list.set(note.id,note)
}

delete(note:Note){
    localStorage.removeItem(note.id)
    this.list.delete(note.id)
}
getAllNotes(){
    return this.list
}

}

