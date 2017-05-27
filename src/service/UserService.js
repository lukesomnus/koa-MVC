import User from '../data/model/User';

export function addUser (username, password, nickname) {
    // if not table, will create
    return User.sync().then(() => {
        return User.create({
            username,
            password,
            nickname
        })
    })
}

export function findOne(username) {
    return User.findOne({
        where: {
            username
        }
    })
}

export function findOneById (id) {
    return User.findById(id)
}