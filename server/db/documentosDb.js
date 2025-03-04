import { documentosColecao } from "./dbConnect.js";

export const obterDocumentos = () => {
  const documentos = documentosColecao.find().toArray();
  return documentos;
};

export const adicionarDocumento = (nome) => {
  const resultado = documentosColecao.insertOne({
    nome,
    texto: "",
  });

  return resultado;
};

export const encontrarDocumento = (nome) => {
  const documento = documentosColecao.findOne({ nome });

  return documento;
};

export const atualizaDocumento = (nome, texto) => {
  const atualizacao = documentosColecao.updateOne(
    { nome },
    { $set: { texto } }
  );

  return atualizacao;
};

export const excluirDocumento = (nome) => {
  const resultado = documentosColecao.deleteOne({ nome });

  return resultado;
};
