import express from 'express';
//import custinfo from './customerinfo'
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './../config';
const router=express.Router();
let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  mdb=db;
});

router.get('/customers',(req,res)=>
{
    let customers={};
mdb.collection("customers").find({}).toArray((err, customer) => {
    if (err) throw err;    
        res.send({customer});
       // mdb.close();
    })
})
export default router;
