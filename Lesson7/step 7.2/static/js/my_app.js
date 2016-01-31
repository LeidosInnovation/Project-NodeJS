var app = angular.module('myApp',[]);
app.controller('tableController', function($scope, $http) {
  $scope.words = [];
  //+ add limit and skip to scope
  $scope.limit = 5;
  $scope.skip = 0;
  $scope.skipEnd = 0;
  
  $scope.getWords = function(){
    $http({url: 'http://localhost/words', method:"GET",
	       //+ limit and skip to req parameters
	       params:{ limit:$scope.limit,
		            skip:$scope.skip }})
    .success(function(data, status, headers, config) {
	   $scope.words = data;
	   //+ update limit and skip
	   $scope.skipEnd = $scope.skip + $scope.words.length;
	})
	.error(function(data, status, headers, config) {
	   $scope.words =[];
	   $scope.skipEnd = $scope.skip + $scope.words.length;
	});
   };
   
   $scope.find = function(){
     //+ initialize skip
     $scope.skip = 0;
     $scope.getWords();
   };
   
   //+ add next paging function
   $scope.next = function(){
     if($scope.words.length === $scope.limit){
	    $scope.skip += parseInt($scope.limit);
		$scope.getWords();
	 }
   };

   //+ add previous paging function
   $scope.prev = function(){
     if($scope.skip >0){
      if($scope.skip >= parseInt($scope.limit)){
         $scope.skip -= parseInt($scope.limit);
      } else{
         $scope.skip = 0;
      }
      $scope.getWords();
    }	 
   };	
});
   