var wallApp = angular.module('wallApp', []);

wallApp
    .controller('MainController', ctrlFunc);


function ctrlFunc($scope, $http){
  $scope.name = "Stranger";
  $scope.message = "hi";
  $scope.submitMessage = function(){
    $http.post('/messages', JSON.stringify({name: $scope.name, message: $scope.message})).then(function(data){
      console.log("Success! " + data);
    },
    function(err){
      if (err) throw err;
    })
  }
}