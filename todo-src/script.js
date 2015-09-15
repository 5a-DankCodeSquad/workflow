// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){

  $scope.priority_enum = ["critical", "high", "moderate", "low"]

  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.todos_updated = ["Learn Angular", "Learn node"];
  $scope.priorities = ["moderate", "moderate"];
  $scope.completed = [false,false];
    $scope.completed_count = 0;
  $scope.newItem = "";
  $scope.editedItem = "";

  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.todos_updated.push($scope.newItem);
      $scope.priorities.push("moderate");
      $scope.newItem = "";
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
      if($scope.completed[index] === true){
          $scope.completed_count--;
      }
    $scope.completed.splice(index,1);

    $scope.priorities.splice(index, 1);
    $scope.todos_updated.splice(index, 1);
 }

 $scope.deleteCompletedItems = function() {
    console.log("in deletion of completed items");
    var size = $scope.todos.length;
    for(var i = size; i > -1; --i) {
      if($scope.completed[i]) {
        $scope.deleteItem($scope.todos[i]);
      }
    }
  };

  $scope.completeItem = function(item) {
    console.log("in completion");
    var index = $scope.todos.indexOf(item);
      $scope.completed_count++;
    $scope.completed[index] = true;
  };

  /*checks off the task if it's completed*/
  $scope.isComplete = function(item) {
    var index = $scope.todos.indexOf(item);
    return $scope.completed[index];
  };

  $scope.setPriority = function(item, priority) {
    console.log("in priority");
    var index = $scope.todos.indexOf(item);
    $scope.priorities[index] = priority;
  }

  $scope.updateItem = function(oldItem) {
    var index = $scope.todos.indexOf(oldItem);
    var newItem = $scope.todos_updated[index];
    if (newItem !== ""){
      $scope.todos[index] = newItem;
    }
  }

  $scope.getPriority = function(item) {
    var index = $scope.todos.indexOf(item);
    return $scope.priorities[index];
  }

  $scope.getPriotityClass = function(item) {
    var p_index = $scope.priority_enum.indexOf(item);
    var classes = ["label label-danger", "label label-warning", "label label-info", "label label-success"];
    return classes[p_index];
  }

  $scope.getIndex = function(item) {
     return $scope.todos.indexOf(item);
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
