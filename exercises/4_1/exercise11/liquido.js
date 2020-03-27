let salario = 3000, inss = null, ir = null, liquido = null;
//Calculo INSS
if (salario >= 5189.82){
    inss = 570.88;
}else if(salario >= 2594.93){
    inss = (salario*0.11);
}else if(salario >= 1556.95){
    inss = (salario*0.09);
}else {
    inss = (salario*0.8);
}
//calculo IR com INSS já deduzido
if (salario-inss >= 4664.68){
    ir = (salario-inss)*0.275 + 869,36;
}else if(salario-inss >= 3751.06){
    ir = (salario-inss)*0.225 + 636.13;
}else if(salario-inss >= 2826.66){
    ir = (salario-inss)*0.15 + 354.80;
}else if(salario-inss >= 1903.99){
    ir = (salario-inss)*0.075 - 142.80;
}else ir = 0;

liquido = salario - ir - inss;
console.log(" Salario bruto: ", salario);
console.log("          INSS: (",inss, ")");
console.log("           IR:  (", ir, ")");
console.log("Salario liquido:", liquido);