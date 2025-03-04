import criaHashESalSenha from "../utils/criaHashESalSenha.js";
import { usuariosColecao } from "./dbConnect.js";

export const cadastrarUsuario = ({ nome, senha }) => {
  const { hashSenha, salSenha } = criaHashESalSenha(senha);
  return usuariosColecao.insertOne({ nome, hashSenha, salSenha });
};

export const obterUsuarios = () => {
  const usuarios = usuariosColecao.find().toArray();
  return usuarios;
};

export const encontrarUsuario = (nome) => {
  const usuario = usuariosColecao.findOne({ nome });

  return usuario;
};

export const atualizaUsuario = (nome, texto) => {
  const atualizacao = usuariosColecao.updateOne({ nome }, { $set: { texto } });

  return atualizacao;
};

export const excluirUsuario = (nome) => {
  const resultado = usuariosColecao.deleteOne({ nome });

  return resultado;
};
