const fs=require('fs');
if(!fs.existsSync('./new')){
fs.mkdir('/newDir',(err)=>{
    if(err) throw err;
    console.log(`directory created`);
})
}