const valores = [7.7, 6.8, 8.9, 6.7, 9.2];
console.log(valores[0], valores[4]);
console.log(valores[5]);

valores[5] = 10;
console.log(valores);
console.log(valores.length);

valores.push({ id: 3 }, false, null, 'teste');
console.log(valores);

console.log(valores.pop());
delete valores[0];
console.log(valores);

console.log(typeof valores);