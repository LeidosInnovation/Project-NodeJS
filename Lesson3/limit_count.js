var MongoClient = require('mongodb').MongoClient;
var mongo = new MongoClient();

mongo.connect("mongodb://localhost/", function(err, db) {
  var myDB = db.db("words");
  
  myDB.collection("words", function(err, collection){
    countWordsStartingWithA(collection);
	
	setTimeout(function(){myDB.close();}, 3000);
  });
});

function countWordsStartingWithA(collection){
  var query = {first: 'a'};
  var aCursor = collection.find(query);
  aCursor.count(function(err, cnt){
    console.log("\nTotal words starting with A: " + cnt);
  });
}