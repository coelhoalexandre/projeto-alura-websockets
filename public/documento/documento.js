import {
  emitirExcluirDocumento,
  emitirTextoEditor,
  selecionarDocumento,
} from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const textoEditor = document.getElementById("editor-texto");
const tituloDocument = document.getElementById("titulo-documento");
const botaoExcluir = document.getElementById("excluir-documento");
const listaUsuariosConectados = document.getElementById("usuarios-conectados");

tituloDocument.textContent = nomeDocumento || "Documento sem título";

export function tratarAutorizacaoSucesso(payloadToken) {
  selecionarDocumento({
    nomeDocumento: tituloDocument.textContent,
    nomeUsuario: payloadToken.nomeUsuario,
  });
}

export function atualizarInterfaceUsuarios(usuariosNoDocumento) {
  listaUsuariosConectados.innerHTML = "";

  usuariosNoDocumento.forEach((usuario) => {
    listaUsuariosConectados.innerHTML += `
      <li class="list-group-item">${usuario}</li>
    `;
  });
}

export const atualizaTextoEditor = (texto) => (textoEditor.value = texto);

export const alertarERedirecionar = (nome) => {
  if (nome === nomeDocumento) {
    alert(`Documento ${nome} excluído!`);
    window.location.href = "/";
  }
};

textoEditor.addEventListener("keyup", () =>
  emitirTextoEditor({
    texto: textoEditor.value,
    nomeDocumento: tituloDocument.textContent,
  })
);

botaoExcluir.addEventListener("click", () =>
  emitirExcluirDocumento(tituloDocument.textContent)
);
