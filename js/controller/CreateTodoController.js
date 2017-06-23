app.controller('CreateTodo',["$scope","TodoService",function ($scope,TodoService) {
    $scope.todo = {};
    $scope.submit = function () {

            var newTodo = {};
            angular.copy($scope.todo, newTodo);
            TodoService.add(newTodo);
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

    $scope.onDropComplete = function (index, obj, evt) {
        var otherObj = TodoService.getById(index);
        var otherIndex = TodoService.getTodos().indexOf(obj);
        TodoService.getTodos()[index] = obj;
        TodoService.getTodos()[otherIndex] = otherObj;
    }


}]);