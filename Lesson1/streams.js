var fs = require('fs');

//writer
var writer = fs.createWriteStream('file1.txt');
writer.write("Some Data");
writer.end();

writer.on('finish', function(){

  //piping
  var reader = fs.createReadStream('file1.txt');
  var writer = fs.createWriteStream('file2.txt');
  reader.pipe(writer);
  
  writer.on('finish', function(){
  
    //reader
    var reader = fs.createReadStream('file2.txt');
	
	reader.on('readable', function(){
	 // console.log("Read: " + this.read().toString());
	});
	
	reader.on('end', function(data){
	  console.log("done.");
	});	
  });
});