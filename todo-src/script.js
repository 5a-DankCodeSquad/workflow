var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.completed = [false,false];
  $scope.newItem = "";

  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
      $scope.completed.push(false);
    }
  };
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.completed.splice(index,1);
  };
    
  $scope.deleteCompletedItems = function() {
    console.log("in deletion of completed items");
    var size = $scope.todos.length;
    for(var i = size; i > -1; --i) {
      if($scope.completed[i] == true) {
        $scope.todos.splice(i, 1);
        $scope.completed.splice(i,1);
      }
    }
  };

  $scope.completeItem = function(item) {
    console.log("in completion");
    var index = $scope.todos.indexOf(item);
    $scope.completed[index] = true;
  };
  
  /*checks off the task if it's completed*/
  $scope.isComplete = function(item) {
    var index = $scope.todos.indexOf(item);
    if ($scope.completed[index] === true) {
      return true;
    }
    else {
      return false;
    }
  }
  
});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 * 
 * *********************/
