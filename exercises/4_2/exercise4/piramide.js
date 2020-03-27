let n = 5, array = [];

for (i = 0; i < n; i++) {
    array[array.length - i] = "*";
    
    console.log(array.join(' ')); //imprime array até onde já foi preenchida
}
