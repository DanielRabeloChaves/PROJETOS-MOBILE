const URL = 'https://api-caminho-certo.tarleylana.repl.co/api/dicas'

export const  getDicas = () =>
  fetch(URL).then(res => res.json())
