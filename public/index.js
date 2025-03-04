import { emitirAdicionarDocumento } from "./socket-front-index.js";
import { removerCookie } from "./utils/cookie.js";

const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");
const botaoLogout = document.getElementById("botao-logout");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  emitirAdicionarDocumento(inputDocumento.value);
  inputDocumento.value = "";
});

botaoLogout.addEventListener("click", () => {
  removerCookie("tokenJwt");
  alert("Usuário deslogado com sucesso!");
  window.location.href = "/login/";
});

export const inserirLinkDocumento = (nomeDocumento) => {
  listaDocumentos.innerHTML += `
  <a
    href="./documento?nome=${nomeDocumento}"
    class="list-group-item list-group-item-action"
    id="documento-${nomeDocumento}"
  >
    ${nomeDocumento}
  </a>
  `;
};

export const removerLinkDocumento = (nomeDocumento) => {
  const documento = document.getElementById(`documento-${nomeDocumento}`);
  listaDocumentos.removeChild(documento);
};
