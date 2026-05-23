/*const { error } = require("console");
const fs=require(`fs`);
const path =require (`path`);

fs.readFile(path.join(__dirname,'files','start.txt'),'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
})
console.log(`HELLLLLOOOO....`)

process.on(`uncaughtException`,err=>{
    console.error(`there was a error:${err}`);
    process.exit(1);
})*/

const {format}=require(`date-fns`);

const {v4:uuid}=require(`uuid`);

console.log(format(new Date(),`yyyy-MM-dd\t\nhh:mm:ss`))
console.log(uuid())