let n = 5, myvar, array = [];
//preencher array
for (i=0; i<n; i++) {
    array[i] = "*";
}
//imprimir linha n vezes
for (i=0; i<n; i++) {
    console.log(array.join(''));//.join('') separa o conteudo dos indices com o caracter que está entre aspas siples (nesse caso, nenhum separador)
}