const fs=require('fs');

const addNotes = function(title,body){
    const notes=loadNotes();
    const search=notes.find((note)=>note.title===title);
    if(!search){
    notes.push({
        title:title,
        body:body,
        time:new Date()
            });
    saveNotes(notes);
    }
    else
    console.log('Note title already taken');
}
const removeNotes=function(title,body){
    const notes=loadNotes();
    const tmp=notes.filter((note)=>note.title!==title);
    if(tmp.length()===notes.length())
    console.log("Note not Found");
    else
    {
        console.log("Note : ",title," removed");
        saveNotes(tmp);
    }
}
const listNotes=function()
{
    const notes=loadNotes();
    notes.forEach((note) => {
        console.log(note.title)
    });
}
const readNotes=function(title)
{
 const notes=loadNotes();
 const search=notes.find((note)=>note.title===title);
 if(search)
 {
     console.log('Found');
     console.log('Title : ',search.title);
     console.log('Body : ',search.body);
     console.log('Time of Creation : ',search.time);
 }
 else
 console.log('Not Found');
}
const saveNotes=function(notes){
    const a=JSON.stringify(notes);
    fs.writeFileSync('notes.json',a);
}
const loadNotes=function(){
try{
   let a=fs.readFileSync('notes.json');
   a=a.toString();
   return JSON.parse(a)
    }
    catch(e){
        return []
    }
}
module.exports={
 addNotes:addNotes,
 removeNotes:removeNotes,
 listNotes:listNotes,
 readNotes:readNotes
}
