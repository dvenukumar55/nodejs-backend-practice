const fs=require(`fs`);

fs.writeFileSync("./files/data2.txt","this is writeFileSync data","utf8");
console.log("file created successfully");
