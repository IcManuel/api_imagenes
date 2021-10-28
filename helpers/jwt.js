const jwt = require("jsonwebtoken");
const generarJWT = (uid, alias) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, alias };
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEDD,
      {
        expiresIn: "2h",
      },
      (error, token) => {
        if (error) {
          console.log(error);
          reject("No se pudo generar el token");
        }
        resolve(token);
      }
    );
  });
};

module.exports = {
  generarJWT,
};
