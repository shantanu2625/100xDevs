const fs = require('fs');
const { Command } = require('commander');

const program = new Command();

program
    .name('cli-args-counter')
    .description('writing a cli to do some string utilites like counting the no. of words in a passed argument')
    .version('0.8.0'); 

program.command('count')
    .description("count number of lines a file")
    .argument('<file>','file to count')
    .action((file)=> {
        fs.readFile(file,'utf-8',(err, data) => {
            if (err) {
                console.log(err)
            } else {
                const lines = data.split('\n').length;
            } 
            console.log(`There are ${lines} lines in ${file} `);
        });
    });
     
program.parse