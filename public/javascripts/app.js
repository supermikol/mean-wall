angular.module('wallApp', []);

angular.module('wallApp')
    .controller('MainController', ctrlFunc);


function ctrlFunc(){
  this.message = "hi";
}