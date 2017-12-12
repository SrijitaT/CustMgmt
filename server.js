import config from './config';
import apiRouter from './api';
import express from 'express';
import fs from 'fs';

const server=express();

/*server.get('/',(req,res)=>{
    res.send("Hello express");
});*/

server.get('/',(req,res)=>{
    res.render('index',{
        content:'Hello from EJS'
    });
})
server.set('view engine','ejs');
server.use(express.static('public'));
server.use('/api',apiRouter);
/*server.get("/customer.html",(req,res)=>{
    fs.readFile('./customer.html',(err,data)=>{
        res.send(data.toString());
    })
});*/
server.listen(config.port,()=>{
    console.log("Express waiting on port ",config.port);
})