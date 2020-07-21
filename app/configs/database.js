const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    logging: false,
    dialect: process.env.DB_DIALECT,
    /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    port: process.env.DB_PORT,
    pool: {
        max: parseInt(process.env.MAX_PROMISE_CONCURENTCY),
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {
        timezone: "Etc/GMT+7"
    },
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
    }
})

module.exports = sequelize