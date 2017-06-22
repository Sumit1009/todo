app.controller('CreateTodo',["$scope","TodoService",function ($scope,TodoService) {
    $scope.todo = {};
    // $scope.todos=[];
    $scope.submit = function () {

            var newTodo = {};
            console.log($scope.todo);
            angular.copy($scope.todo, newTodo);
            TodoService.add(newTodo);
            console.log($scope.todos);
    };

    $scope.todos=TodoService.getTodos();

    $scope.minDate=new Date();

}]);