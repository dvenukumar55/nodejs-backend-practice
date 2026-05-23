const fs=require(`fs`)

fs.mkdir("./files/newFiles",(err)=>{
    if(err){
        console.log("error");
    }
    console.log("folder created successfully");
})