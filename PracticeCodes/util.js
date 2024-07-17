const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

async function readMyFile() {
    try {
        const data = await readFile('../js_sql_interview_notes/Nadsoft_NodeJS.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

readMyFile();
