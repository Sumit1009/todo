app.controller('CreateTodo',["$scope",function ($scope) {
    $scope.todo = {};
    console.log($scope.todo.title);
    console.log($scope.todo.date);
}]);