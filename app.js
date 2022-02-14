const { title } = require('process');
const { demandOption, string } = require('yargs');
const yargs=require('yargs');
const notes=require('./notes.js');
yargs.command({
    command :'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Title of the note',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body of thee note',
            demandOption:true,
            type:'string'
        }            
    },
    handler: (argv)=>{
        notes.addNotes(argv.title,argv.body);
    }

});

yargs.command({
    command :'remove',
    describe: 'Removing a note',
    builder:{
        title:{
            describe:'Title of the note',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body of the note',
            demandOption:true,
            type:'string'
        }            
    },
    handler: (argv)=>notes.removeNotes(argv.title,argv.body)
});

yargs.command({
    command :'read',
    describe: 'Reading a note',
    builder:{
        title:{
            describe:'Title of note to be read',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv)=>notes.readNotes(argv.title)
});

yargs.command({
    command :'list',
    describe: 'Listing all notes',
    handler: ()=>{console.log("Listing Notes:")
                notes.listNotes();
}
});
yargs.parse();
