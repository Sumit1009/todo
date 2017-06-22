app.controller('CreateTodo',["$scope","todoService",function ($scope) {
    $scope.todo = {};
    $scope.todos=[]
    $scope.submit = function () {
        $scope.todos.push(todo)
    }
}]);