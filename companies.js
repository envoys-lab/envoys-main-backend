const { Op } = require("sequelize");
const AdminMiddleware = require("./middlewares/AdminMiddleWare.js");

const Company = require("./models/company.js");

async function upsert(values, condition) {
    const obj = await Company.findOne({ where: condition });
    if(obj && condition) {
        return obj.update(values);
    } else {
        return Company.create(values);
    }
}

const add = (req, res) => {
    const condition = req.params.id ? {id: req.params.id} : undefined;

    upsert(req.body, condition).then(obj => {
        res.json(obj);
    })
}

function companies(app) {
    app.use("/add", AdminMiddleware);
    app.post('/add', add);
    app.post('/add/:id', add);

    app.get('/get/:id', function(req, res) {
        Company.findOne({where: {
            id: req.params.id
        }}).then(company => {
            if(company) {
                res.json(company);
            } else {
                return res.status(404).json({message: "Company not found"});
            }
        })
    });

    app.get('/list/:startId/:category?', function(req, res) {
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
            limit: 50
        }).then(companies => res.json(companies))
    });
}

module.exports = companies;