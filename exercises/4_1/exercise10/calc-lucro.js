let custo = 10, valor = 20, qtvenda = 1000, lucro = null;
const imposto = custo*0.2;


if (custo > 0 && valor > 0) {
    lucro = qtvenda*(valor - custo - imposto);
    console.log("Vender", qtvenda, "produtos gera", lucro, " de lucro (com imposto já descontado)");
}else console.log("valor invalido");