export class Note{
    title:string
    text:string
    id!:string
    
    constructor(title:string,text:string){
        this.title=title
        this.text=text
    }
}