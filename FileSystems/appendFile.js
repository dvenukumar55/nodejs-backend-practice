const fs=require(`fs`);

fs.appendFile("./files/data.txt","\n\n this is apppended data","utf8",(err,data)=>{
    if(err){
        console.log("error");
    }
    console.log("appended done")
})