const fs=require(`fs`);

fs.rename("./files/newfolder1","./files/newFiles2",(err)=>{
    if(err){
        console.log("error");
    }
    console.log("renamed done");
})