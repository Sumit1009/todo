app.factory('TodoService',[function () {
         var _todos=[];
    this.add = function (todo) {
        todo.read=false;
        return _todos.push(todo);
    };
    this.getTodos=function () {
        return _todos
    };

    this.getById=function (id) {
       return _todos[id];
    };

    return this
}]);