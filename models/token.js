const db = require('../db.js');

const Token = db.define("token", {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    value: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Token;