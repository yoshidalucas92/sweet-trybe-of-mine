let peca = 'rainha';
switch (peca.toLowerCase()) {
    case 'peao':
        console.log('vertical até duas casas no primeiro movimento, vertical somente uma casa, diagonal em uma casa para eliminar peça adversaria. somente para frente');
        break;
    case 'torre':
        console.log('verticais e horizontais');
        break;
    case 'bispo':
        console.log('diagonais');
        break;
    case 'cavalo':
        console.log('Movimento em L');
        break;
    case 'rei':
        console.log('diagonais, horizontais e verticais, com limite de uma casa');
        break;
    case 'rainha':
        console.log('diagonais, horizontais e verticais');
        break;
    default: console.log('nome inválido. tente com: \npeao\ntorre\nbispo\ncavalo\nrei\nrainha');
}
