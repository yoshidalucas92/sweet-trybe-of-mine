let res = "torre";
let peca = res.toLowerCase();
console.log(peca);
switch (peca){
    case "peão": console.log("uma casa :frontal, diagonal frontal para matar");
    break;
    case "torre": console.log("laterais");
    break;
    case "bispo": console.log("diagonais");
    break;
    case "cavalo": console.log("Formato de L");
    break;
    case "rei": console.log("uma casa: lateral e diagonal");
    break;
    case "rainha": console.log("laterais e diagonais");
    break;
}
