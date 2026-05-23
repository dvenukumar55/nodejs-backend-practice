const fs=require(`fs`);

fs.writeFile("./files/data4.txt","this is writeFile data","utf8",(err,data)=>{
    if(err){
        console.log("error");
    }
    console.log("file succesfully created");
})
