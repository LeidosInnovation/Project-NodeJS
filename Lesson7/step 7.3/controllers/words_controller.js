var MongoClient = require('mongodb').MongoClient;

var words = null;
MongoClient.connect("mongodb://localhost/", function(err, db) {
  words = db.db("words").collection("word_stats");
});

exports.getWords = function(req, res) {
  if (words){
    //+ add regex for word contains		   
    words.find({word: new RegExp(req.query.contains, 'i')},
	           {limit: req.query.limit,
			    skip: req.query.skip},
	 function(err, cursor){
       cursor.toArray(function(err, wordsArr){
         res.json(wordsArr);
       });
     });
  } else {
     res.json(503,{});
  }
};  
