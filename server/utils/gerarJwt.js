import jwt from "jsonwebtoken";

const gerarJwt = (payload) => {
  const tokenJwt = jwt.sign(payload, process.env.SEGREDO_JWT, {
    expiresIn: "1h",
  });

  return tokenJwt;
};

export default gerarJwt;
