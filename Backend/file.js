
import fs, { readFile } from 'fs/promises';

// fs.writeFile('read.txt', 'this is my first file', ()=>{
//     console.log('file is created');
// });
// fs.readFile('read.txt',  (err, data)=>{
//     console.log(err,data.toString());
// });
// fs.appendFile('read.txt', ' \n\nand this is appended text', ()=>{
//     console.log('file is appended');
// });

let a = await fs.readFile('read.txt');
console.log(a.toString());

let b= await fs.appendFile('read.txt', '\n This is appended text 2');