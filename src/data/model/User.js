import DataType from 'sequelize';
import Model from '../sequelize';
import Todo from './Todo';

const User = Model.define('user', {
    id: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV1,
        primaryKey: true
    },
    username: {
        type: DataType.STRING(255),
        allowNull: false,
        unique: true
    },
    nickname: {
        type: DataType.STRING(255),
        allowNull: false
    },
    password: {
        type: DataType.STRING(255),
        allowNull: false
    },

}, {
    indexes: [{
        unique: true,
        fields: ['username']
    }]
})

Todo.belongsTo(User)

export default User;