const fs=require(`fs`);

const data=fs.readFileSync("./files/info.txt","utf8");
console.log(data);