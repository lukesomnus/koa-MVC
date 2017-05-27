import * as TodoService from '../service/TodoService';
import errCode from '../config/errorCode';
import {
    handleQuerySuccess,
    handleQueryFail
} from '../util/handleResponse';

export async function saveTodo(ctx) {
    const params = ctx.request.body
    const {
        text,
        priority,
        isCompleted,
        duration
    } = params
    const userId = ctx.state.user.id
    try {
        let todo = await TodoService.addTodo(userId, text, priority, isCompleted, duration)
        if (todo.get('id')) {
            handleQuerySuccess(ctx, {
                todo
            })
        } else {
            handleQueryFail(ctx, errCode.SAVE_ERROR, 'save error')
        }
    } catch (error) {
        console.log(error.message)
        handleQueryFail(ctx, errCode.SYSTEM_ERROR, 'System error')
    }
}

export async function getTodos(ctx, next) {
    const userId = ctx.state.user.id
    try {
        let todos = await TodoService.getTodos(userId)
        if (todos && todos.length) {
            handleQuerySuccess(ctx, {
                todos
            })
        } else {
            handleQueryFail(ctx, errCode.NOT_FOUND, 'this user has no todo')
        }
    } catch (error) {
        console.log(error.message)
        handleQueryFail(ctx, errCode.SYSTEM_ERROR, 'System error')
    }
}

exports.removeTodo = async function (ctx) {
    const id = ctx.params.id
    try {
        let result = await TodoService.removeTodo(id)
        console.log(result)
        if (result) {
            handleQuerySuccess(ctx, {
                result
            })
        } else {
            handleQueryFail(ctx, errCode.HAVEN_DELETED, 'this todo doesn\'t exist')
        }
    } catch (error) {
        handleQueryFail(ctx, errCode.SYSTEM_ERROR, 'System error')
    }
}

export async function changeTodoStatus(ctx) {
    const todoId = ctx.params.id
    try {
        let result = await TodoService.completeTodo(todoId)
        if (result[0]) {
            handleQuerySuccess(ctx, {
                result: result[0]
            })
        } else {
            handleQueryFail(ctx, errCode.HAVEN_DELETED, 'this todo doesn\'t exist')
        }
    } catch (error) {
        handleQueryFail(ctx, errCode.SYSTEM_ERROR, 'System error')
    }
}