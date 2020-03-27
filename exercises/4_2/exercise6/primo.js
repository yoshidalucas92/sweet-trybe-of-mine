//Válido apenas para valores inteiros
let n = 29, primo = true; 
//primo começa como true pois do número 3, se tentar 1, 2 e 3 ele nem efetua os testes
for (i = 3; i < n; i++) { // 0, 1 e 2 não são verificados
    if ((i != n) && (i != 1)) { // Se i for diferente de n E diferente de 1,
        if (n % i === 0) {      //Então ele verifica se o mod da divisão entre n por i é igual a zero
            primo = false;      //Se for igual a zero, logo não é um número primo.
            break;              //Não há pq fazer mais testes
        }else {
            primo = true;       //Se todos os mods de n por i forem diferentes de zero então o número é primo
        }
    }
}
if (primo) {
    console.log(n, "É um número primo"); 
} else{
    console.log(n, "Não é um número primo");
}
