var app = angular.module('myApp', []);

app.value('censorWords', ['bad','mad','sad']);
app.constant('repString', "****");

//^ service functionality
function CensorObj(cWords, repString) {
  this.censor = function(inString){
    var outString = inString;
	for(var i in cWords){
	  outString = outString.replace(cWords[i], repString);
	}
	return outString;
   };
}

app.service('censorS', ['censorWords', 'repString', CensorObj]);

//^ dependency injection
app.controller('myController', ['$scope', 'censorS',
                                function($scope, censorS) {
	$scope.stringA = censorS.censor("bad text");
    $scope.stringB = censorS.censor("bad, mad and sad text");
  }]);	