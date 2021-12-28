const CompaniesController = require("./controllers/Companies.controller");
const FilesController = require("./controllers/Files.controller");
const AdminMiddleware = require("./middlewares/AdminMiddleWare");

const routes = (app) => {
    app.use('/add', AdminMiddleware);
    app.post('/add', CompaniesController.add);
    app.post('/add/:id', CompaniesController.add);
    app.get('/get/:id', CompaniesController.getById);
    app.get('/list/:startId/:category?', CompaniesController.list);

    app.use('/files', AdminMiddleware);
    app.post('/files/upload', FilesController.upload);

}

module.exports = routes;