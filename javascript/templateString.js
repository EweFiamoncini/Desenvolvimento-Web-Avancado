const name = 'Ewe';
const concatenacao = 'Olá ' + name + '!';

const template = `
  Olá
  ${name}!`
console.log(concatenacao, template);

//expressoes...
console.log(`1 + 1 = ${1 + 1}`);

const up = s => s.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);