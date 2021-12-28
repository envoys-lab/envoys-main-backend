const Company = require("../models/company");
const { Op } = require("sequelize");

async function upsert(values, condition) {
    const obj = await Company.findOne({ where: condition });
    if(obj && condition) {
        return obj.update(values);
    } else {
        return Company.create(values);
    }
}

const СompaniesController = {
    getById: function(req, res) {
        Company.findOne({where: {
            id: req.params.id
        }}).then(company => {
            if(company) {
                res.json(company);
            } else {
                return res.status(404).json({message: "Company not found"});
            }
        })
    },

    list: function(req, res) {
        const categoryCondition = req.params.category ? {
            category: req.params.category
        } : {};

        Company.findAll({
            where: {
                id: {
                    [Op.gte]: req.params.startId
                },
                ...categoryCondition
            },
            limit: 200
        }).then(companies => res.json(companies))
    },

    add: function(req, res) {
        const condition = req.params.id ? {id: req.params.id} : undefined;

        upsert(req.body, condition).then(obj => {
            res.json(obj);
        })   
    }
}

module.exports = СompaniesController;
