const path = require("path");

const FilesController = {
    upload: (req, res) => {
        const filenameOrigin = req.files.file.name;
        const ext = filenameOrigin.split(".").slice(-1);

        const filename = req.files.file.md5 + "."+ Buffer.from(req.body.alias).toString('base64') +"." + ext;

        req.files.file.mv(`${path.dirname(require.main.filename)}/public/${req.body.to}/${filename}`);
        res.json(filename);

    }
}

module.exports = FilesController;