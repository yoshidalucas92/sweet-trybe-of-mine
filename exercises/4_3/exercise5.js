let abc = false;
let info1 = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'Sim'
},
    info2 = {
        personagem: "Tio Patinhas",
        origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
        nota: "O último MacPatinhas",
        recorrente: 'Sim'
    };
function verifica(info1, info2) {
    for (i in info1) {
        if (info1[i] === info2[i]) {
            console.log("Ambos são");
        } else console.log(info1[i], info2[i]);
    }
}
verifica(info1, info2);
