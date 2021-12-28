const db = require('../db.js');

const Company = db.define("company", {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    paper: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    symbol: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    branch: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    kind: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    owner: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    ownerRank: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    auditor: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    registrator: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    marketmaker: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    lastPrice: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    capitalization: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    quantity: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    sv: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    files: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
    
});

module.exports = Company;