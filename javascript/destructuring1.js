// novo recurso do ES2015

const pessoa = {
  nome: 'Ewerton',
  idade: 25,
  endereco: {
    rua: 'alfredo mett',
    numero: 123
  }
};

//usando mesma variavel
const { nome, idade } = pessoa;
console.log(nome, idade);

//trocando a variavel
const { nome: n, idade: i } = pessoa;
console.log(n, i);

//tentando buscar algo que nao esta declaradao | undefined
const { sobreNome, bemHumorado = true } = pessoa;
console.log(sobreNome, bemHumorado);

//acessando atributos dentro de outros atributos
const { endereco: { rua, numero, cep } } = pessoa;
console.log(rua, numero, cep);