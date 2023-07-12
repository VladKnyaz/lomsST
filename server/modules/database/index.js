import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('loms', 'root', 'cAfXUqWWWK', {
    host: 'loms-studio.com',
    dialect: 'mysql',
});

export default sequelize;

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }
})();
