import { definirCookie } from "../utils/cookie.js";

const socket = io();

export const emitirAutenticasUsuario = (dados) => {
  socket.emit("autenticar_usuario", dados);
};

socket.on("usuario_nao_encontrado", () => alert("Usuário não encontrado!"));

socket.on("autenticacao_sucesso", (tokenJwt) => {
  definirCookie("tokenJwt", tokenJwt);
  alert("Usuario autenticado com sucesso!");
  window.location.href = "/";
});

socket.on("autenticacao_erro", () => alert("Erro na autenticação!"));
