const express = require("express");

require("dotenv").config();

//Crear el servidor de express
const app = express();

//CORS
const cors = require("cors");
app.use(cors());

//Directorio publico
app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./imagenes/");
  },
  filename: function (req, file, callback) {
    console.log("aqui esta con: ", file.originalname);

    callback(null, file.originalname);
  },
});
const upload = multer({ dest: "imagenes/", storage: storage });

//Rutas
app.use("/api/foto", require("./routes/images_route"));

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});

app.post("/api/imagen", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      ok: false,
    });
  }
  return res.status(200).json({
    ok: true,
    nombre: req.file.originalname,
  });
});
