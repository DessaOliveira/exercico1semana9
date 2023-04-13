const jwt = require("jsonwebtoken");

function validateToken(request, response, next) {
  
  const token = request.headers.authorization;
  if (!token || token === "Bearer") {
    return response.status(403).json({ message: "Token não presente" });
  }
  const tokenJwt = token.slice(7);
  jwt.verify(
    tokenJwt,
    "GUNS_N_ROSES",
    (error, conteudoDescodificado) => {
      if (error) {
        if (error.name === "TokenExpiredError") {
          return response.status(403).json({ error: "Token expirad" });
        } else if (error.name === "JsonWebTokenError") {
          return response.status(403).json({ error: "Invalid token" });
        } else {
          return response.status(500).json({ error: "Internal server error" });
        }
      } else {
        console.log(conteudoDescodificado)
         request.body.userId = conteudoDescodificado.id
        return next();
      }
    }
  );
}

module.exports = validateToken;