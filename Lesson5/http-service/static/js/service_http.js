var app = angular.module('myApp', []);

//^ dependency injection of services
app.controller('myController', ['$scope', '$http',
                              function($scope, $http) {
    $scope.words = [];
    $scope.status = "";
    $scope.newWord = "";

    $scope.getWords = function() {
      $http.get('http://localhost/words')
	           .success(function(data, status, headers, config) {
		 $scope.words = data;
	  }).
	  error(function(data, status, headers, config) {
	    $scope.status = data;
	  });
    };

    $scope.addWord = function(){
      $http.post('http://localhost/add', {word: $scope.newWord})
                .success(function(data, status, headers, config) {
         $scope.newWord = "";
         $scope.status = data;
         $scope.getWords();
      }).
      error(function(data, status, headers, config) {
        $scope.status = data;
      });
    };

    $scope.removeWord = function(deleteWord){
       $http.post('http://localhost/remove', {word: deleteWord}).
         success(function(data, status, headers, config) {
           $scope.words = data;
           $scope.status = data;
           $scope.getWords();
         }).
         error(function(data, status, headers, config) {
           $scope.status = data; 
         });
    };

    $scope.getWords();
}]);	