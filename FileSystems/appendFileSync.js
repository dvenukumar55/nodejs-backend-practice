const fs=require(`fs`);

fs.appendFileSync("./files/data2.txt","\nthis is updated data","utf8");
console.log("appended done");

