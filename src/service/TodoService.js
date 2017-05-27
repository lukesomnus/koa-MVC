import Todo from '../data/model/Todo';

export function addTodo(userId, text, priority, isCompleted = false, duration) {
    return Todo.sync().then(() => {
        return Todo.create({
            userId,
            text,
            priority,
            isCompleted,
            duration
        })
    })
}
export function getTodos(userId) {
    return Todo.findAll({
        where: {
            userId
        }
    })
}
export function removeTodo(todoId) {
    return Todo.destroy({
        where: {
            id: todoId
        }
    })
}
exports.completeTodo = function (todoId) {
    return Todo.update({
        isCompleted: true
    }, {
        where: {
            id: todoId
        }
    })
}