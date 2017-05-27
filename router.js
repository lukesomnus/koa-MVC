import Router from 'koa-router';
import passport from 'koa-passport';
import * as TodoController from './src/controller/TodoController';
import * as UserController from './src/controller/UserController';
const router = Router();

// 退出登录
router.get('/logout', function (ctx) {
    ctx.logout();
    ctx.redirect('/login.html')
})
// 登录
router
    .post('/login',
        passport.authenticate('local', {
            successRedirect: '/app.html',
            failureRedirect: '/login.html'
        }))
    .post('/user/signup', UserController.addUser)

// Todo Request
router
    .post('/todos', TodoController.saveTodo)
    .get('/todos', TodoController.getTodos)
    .del('/todos/:id', TodoController.removeTodo)
    .patch('/todos/:id', TodoController.changeTodoStatus)

export default router;