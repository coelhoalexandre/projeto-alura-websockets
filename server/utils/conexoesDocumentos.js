const conexoesDocumentos = [];

export const encontrarConexao = (nomeDocumento, nomeUsuario) =>
  conexoesDocumentos.find(
    (conexao) =>
      conexao.nomeDocumento === nomeDocumento &&
      conexao.nomeUsuario === nomeUsuario
  );

export const adicionarConexao = (conexao) => conexoesDocumentos.push(conexao);

export const obterUsuariosDocumento = (nomeDocumento) =>
  conexoesDocumentos
    .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
    .map((conexao) => conexao.nomeUsuario);

export const removerConexao = (nomeDocumento, nomeUsuario) => {
  const indice = conexoesDocumentos.findIndex(
    (conexao) =>
      conexao.nomeDocumento === nomeDocumento &&
      conexao.nomeUsuario === nomeUsuario
  );

  if (indice !== -1) conexoesDocumentos.splice(indice, 1);
};
