function logItem(item, callback){
  console.log("Logging Item: " + item);
  
  process.nextTick(function() {
    callback(item);
  });
}

logItem('Car', function(msg){
  console.log('Saw a ' + msg);
});

logItem('Truck', function(msg){
  console.log('Rode in a ' + msg);
});

logItem('Jeep', function(msg){
  console.log('Drove a ' + msg);
}); 