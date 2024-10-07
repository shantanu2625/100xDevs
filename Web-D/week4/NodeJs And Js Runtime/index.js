

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
    .name("counter")
    .description("CLI to do file-based tasks")
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
            } else { 
                const lines = data.split('\n').length;
                console.log(`There are ${lines} lines in this ${file} file`);
            }
        });
    });

program.parse(process.argv); // Ensure process.argv is passed
