import  UserService from '../service/UserService';

export async function addUser(ctx, next) {
    const {
        username,
        password,
        nickname
    } = ctx.query;
    try {
        let result = await UserService.addUser(username, password, nickname)
        if (result) {
            ctx.body = {
                data: result
            }
        }
    } catch (error) {
        ctx.throw(400, {
            statusCode: '401',
            errmsg: '2312312'
        })
    }
}

export async function findOne(ctx, next) {
    const {
        username,
        password
    } = ctx.query
    try {
        let user = await UserService.findUser(username)
        if (user && user.password === password) {
            ctx.body = {
                data: user
            }
        } else {
            ctx.body = {
                err: 'login fail'
            }
        }
    } catch (error) {

    }
}