import { obterCookie } from "../utils/cookie.js";
import {
  alertarERedirecionar,
  atualizarInterfaceUsuarios,
  atualizaTextoEditor,
  tratarAutorizacaoSucesso,
} from "./documento.js";

const socket = io("/usuarios", {
  auth: {
    token: obterCookie("tokenJwt"),
  },
});

socket.on("autorizacao_sucesso", tratarAutorizacaoSucesso);

socket.on("connect_error", (erro) => {
  alert(erro);
  window.location.href = "/login";
});

socket.on("texto_editor_clientes", (texto) => atualizaTextoEditor(texto));
socket.on("excluir_document_sucesso", (nome) => alertarERedirecionar(nome));
socket.on("usuarios_no_documento", atualizarInterfaceUsuarios);
socket.on("desconectando", atualizarInterfaceUsuarios);
socket.on("usuario_ja_no_documento", () => {
  alert("Documento já aberto em outra página.");
  window.location.href = "/";
});

export const selecionarDocumento = (dadosEntrada) =>
  socket.emit("selecionar_documento", dadosEntrada, (texto) =>
    atualizaTextoEditor(texto)
  );

export const emitirTextoEditor = (dados) => socket.emit("texto_editor", dados);

export const emitirExcluirDocumento = (nome) =>
  socket.emit("excluir_documento", nome);
