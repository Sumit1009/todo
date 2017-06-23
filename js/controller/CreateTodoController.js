app.controller('CreateTodo',["$scope","TodoService",function ($scope,TodoService) {
    $scope.todo = {};
    $scope.submit = function (isValid) {

            var newTodo = {};
            console.log($scope.todo);
            angular.copy($scope.todo, newTodo);
            TodoService.add(newTodo);
            console.log($scope.todos);
    };

    $scope.todos=TodoService.getTodos();

    $scope.minDate=new Date();

    $scope.remove = function(todo) {
        var index = $scope.todos.indexOf(todo);
        $scope.todos.splice(index, 1);
    };

    $scope.edit = function (todo, editTodo) {
        todo.title = editTodo.title;
        todo.date = editTodo.date;
    };

}]);