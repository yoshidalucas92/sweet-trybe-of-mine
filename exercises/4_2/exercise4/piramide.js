let n = 5, array = [];

//preencher array
for (i = 0; i < n; i++) {
    array[i] = " ";
}

//preencher array do final para o começo
for (i = 0; i < n; i++) {
    array[array.length-i-1] = "*";
    console.log(array.join(' ')); //imprime array até onde já foi preenchida
}
for (i = n; i > n; i--) {
    array[array.length-i-1] = " ";
    console.log(array.join(' ')); //imprime array até onde já foi preenchida
}
