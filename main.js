const matriz = [
  [4,0,2,0],
  [0,0,0,0], 
  [2,0,0,0], 
  [0,0,0,0]
];

function escreverLinha(text) {
  document.write(text);
}

function pularLinha() {
    escreverLinha('<br>');
};


function moverParaCima () {

}

function moverParaBaixo() {
}

function moverParaDireita() {
  
}

function moverParaEsquerda () {

}

function escreverMatrizNaTela () {
  for(let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
      escreverLinha(' | ');
      escreverLinha(matriz[linha][coluna]);
    }
    escreverLinha(' | ');
    pularLinha();
  }
}

//MAIN
escreverMatrizNaTela();