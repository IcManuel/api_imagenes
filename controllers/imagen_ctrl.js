const { response } = require("express");
const fs = require("fs");
const servirImagen = (req, res = response) => {
    try {
        const { imagen_id } = req.params;
        const url = "./imagenes/" + imagen_id;
        console.log("el url es url ", url);
        fs.readFile(url, function (err, data) {
            if (err) {
                console.log(err);
                return;
            }
            res.write(data);
            return res.end();
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    servirImagen,
};