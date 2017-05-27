import DataType from 'sequelize';
import Model from'../sequelize';

const Todo = Model.define('todo', {
    id: {
        type: DataType.BIGINT(20),
        autoIncrement: true,
        primaryKey: true
    },
    text: {
        type: DataType.STRING,
        allowNull: false,

    },
    priority: {
        type: DataType.INTEGER,
        defaultValue: 1,
        allowNull: false

    },
    isCompleted: {
        type: DataType.BOOLEAN,
        defaultValue: false,
        allowNull: false

    },
    duration: {
        type: DataType.INTEGER,
        defaultValue: 1,
        allowNull: false
    }
})
export default Todo;