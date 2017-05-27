import Sequelize from 'sequelize';
import {
    database,
    host,
    port,
    username,
    password
} from '../config/dbConfig';

const sequelize = new Sequelize(database, username, password, {
    host,
    port,
    dialect: 'mysql',
})

// sequelize.sync();
sequelize
    .authenticate()
    .then(err => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

export default sequelize;