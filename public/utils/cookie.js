export const definirCookie = (chave, valor) =>
  (document.cookie = `${chave}=${valor};path=/`);

export const obterCookie = (chave) =>
  document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${chave}=`))
    ?.split("=")[1];

export const removerCookie = (chave) =>
  (document.cookie = `${chave}=; expire=Thu, 01 Jan 1970 00:00:00`);
