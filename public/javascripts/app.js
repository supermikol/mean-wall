var wallApp = angular.module('wallApp', []);

wallApp
    .controller('MainController', ctrlFunc);


function ctrlFunc($scope, $http){
  $scope.name = "Stranger Danger";
  $scope.message = "hi";

  setInterval(function(){
    $http.get('/messages')
      .success(function(data){
      $scope.messages = data;
    })
      .error(function(err){
      if (err) throw err;
      console.log('Error!')
    });
  }, 1000);

  $scope.submitMessage = function(){
    $http.post('/messages', JSON.stringify({name: $scope.name, message: $scope.message}))
      .success(
        function(data){
          $scope.messages = data;
          $scope.message = "";
      })
      .error(function(err){
          if (err) throw err;
      });
  }

  $scope.deleteMessage = function(msgID){
    $http.delete('/messages/'+ msgID)
      .success(
        function(data){
          $scope.messages = data;
        })
      .error(function(err){
        if (err) throw err;
      });
  }
}