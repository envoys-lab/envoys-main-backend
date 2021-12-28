const Token = require("../models/token");

const AdminMiddleware = (req, res, next) => {
    const authKey = req.header("Admin-Auth-Key");
    if(authKey === undefined) {
        return res.status(400).json({message: "No auth key"});
    }
    Token.findOne({
        where: {
            value: authKey
        }
    }).then(obj => {
        res.json({test: 1, obj:obj});
    }).catch(() => {
        res.status(404).json({message: "Not found"})
    })
}

module.exports = AdminMiddleware;
