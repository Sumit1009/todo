app.controller('CreateTodo',["$scope",function ($scope) {
    $scope.todo = {};
    $scope.todos=[
        {
            task: 'hello1',
            date: "12/11/2015"
        },
        {
            task: 'hello2',
            date: "12/11/2015"
        },
        {
            task: 'hello3',
            date: "12/11/2015"
        }
    ];
    $scope.submit = function () {
        $scope.todos.push(todo)
    };
    $scope.remove = function(todo) {
        var index = $scope.todos.indexOf(todo);
        $scope.todos.splice(index, 1);
    };
}]);