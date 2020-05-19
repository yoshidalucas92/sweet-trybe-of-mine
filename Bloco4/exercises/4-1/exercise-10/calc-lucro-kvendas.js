
let custo = 10, venda = 13, lucro;

if((custo > 0) && (venda > 0)) {
    lucro = (venda - custo * 0.8) * 1000;
    console.log('O lucro da empresa foi de ', lucro);
} else console.log('Erro!');

