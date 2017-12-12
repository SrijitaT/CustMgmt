var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
 /* db.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");*/
     var myobj =  [{id:2, Firstname:"Neha",Lastname:"Verma",
              DOB:"17/09/1993",Email:"neha@gmail.com", Postalcode:"711902", Contact:"9389072210"
            },{id:3, Firstname:"Karishma", Lastname:"Liyakat",DOB:"24/03/1994", Email:"karishma@gmail.com",
              Postalcode:"711202",Contact:"9339072217"
            },{  id:4, Firstname:"Sayantan", Lastname:"Paramanik", DOB:"24/03/1994",Email:"sayantan@gmail.com",
              Postalcode:"711202", Contact:"9339072217" 
             }];
  db.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
     db.close();
  });
});