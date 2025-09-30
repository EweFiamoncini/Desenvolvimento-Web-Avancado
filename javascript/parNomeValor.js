// par nome/valor
const saudacao = 'Olá, Tudo bem?'; //texto lexico 1

function exec() {
  const saudacao = 'Olaaa' // contexto lexico 2
  return saudacao
};

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Ewerton',
  idade: 25,
  peso: 55,
  endereco: {
    rua: 'Alfredo mett',
    numero: 123
  }
};

console.log(saudacao);
console.log(exec());
console.log(cliente);