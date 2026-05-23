const fs=require(`fs`);
/*
fs.unlink("./files/data3.txt",(err)=>{
    if(err){
        console.log("error");
    }
    console.log("deleted done");
})
*/

/*
if(fs.existsSync(".files/data3.txt")){
    fs.unlink("./files/data3.txt",(err)=>{
    if(err){
        console.log("error");
    }
    console.log("deleted done");
});
}
else{
    console.log("file not found");
}
*/

fs.unlink("./files/newfolder1",(err)=>{
    if(err){
        console.log(err);
    }
    
})