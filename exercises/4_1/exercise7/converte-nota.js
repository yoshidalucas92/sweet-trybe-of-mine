let nota = 90;
let conceito = null;

if (nota >= 0 && nota <= 100) {
    if (nota >= 90) {
        conceito = "A";
    } else if (nota >= 80) {
        conceito = "B";
    } else if (nota >= 70) {
        conceito = "C";
    } else if (nota >= 60) {
        conceito = "D";
    } else if (nota >= 50) {
        conceito = "E";
    } else {
        conceito = "F";
    }
} else {
    conceito = "invalido"
}
console.log(nota, conceito);
