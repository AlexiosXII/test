const Sequelize = require('sequelize')
const dbConnector = require('../configs/database')
const tableName = 'Tag'
const Tag = dbConnector.define(
    tableName, {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    }, {
        tableName
    },
)

module.exports = Tag