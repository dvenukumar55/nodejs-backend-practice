/*
const fspromises=require('fs').promises;

const EventEmitter= require('events');
class MyEmitter extends EventEmitter{}
const myEmitter=new MyEmitter();

const port=process.env.port ||3500;

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./public/index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("./public/about.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
*/

const express = require('express');
const app=express();
const path=require(`path`);
const port=process.env.port||3500;

app.get(`/`,(req,res)=>{
  //res.end(`./frontend/index.html`,{root:__dirname});
  res.sendFile(path.join(__dirname,`./frontend`,`index.html`));
})

app.get(`/newpage`,(req,res)=>{
  //res.end(`./frontend/index.html`,{root:__dirname});
  res.sendFile(path.join(__dirname,`./frontend`,`newindex.html`));
})

app.get(`/*`,(req,res)=>{
  //res.end(`./frontend/index.html`,{root:__dirname});
  res.status(404).sendFile(path.join(__dirname,`./frontend`,`index.html`));
})
app.listen(port,()=> console.log(`server running on port ${port} `))