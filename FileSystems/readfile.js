const fs=require(`fs`);

fs.readFile("./files/info.txt","utf8",(err,data)=>{
    if(err){
        console.log("error in file");
        return;
    }
    console.log(data);
})