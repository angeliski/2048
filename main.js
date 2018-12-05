const matriz = [
  [4,0,2,0],
  [0,0,0,0], 
  [0,0,0,0], 
  [2,0,0,0]
];

function escreverLinha(text) {
  document.write(text);
}

function pularLinha() {
    escreverLinha('<br>');
};


function moverParaCima ()  {
  let qtdLinhas = matriz.length -1;
  for(let linha = 0; linha < qtdLinhas; linha++) {
    let qtdColunas =  matriz[linha].length;
    for (let coluna = 0; coluna < qtdColunas; coluna++) {
     if(matriz[linha][coluna] == 0){
      matriz[linha][coluna] = matriz[linha + 1][coluna] || 0;
      if(linha + 1 <= qtdLinhas) {
        matriz[linha  + 1][coluna] = 0;
      }
     }
    }
  }
  escreverMatrizNaTela();
}


function moverParaBaixo() {
  for(let linha = matriz.length - 1; linha > 0; linha--) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
      if(matriz[linha][coluna] == 0){
        matriz[linha][coluna] = matriz[linha - 1][coluna] || 0;
        matriz[linha - 1][coluna] = 0;
      } 
    }
  }

  escreverMatrizNaTela();

}

function moverParaDireita() {
  for(let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = matriz[linha].length - 1; coluna >= 0; coluna--) {
      if(matriz[linha][coluna] == 0){
        matriz[linha][coluna] = matriz[linha][coluna - 1] || 0;
        matriz[linha][coluna - 1] = 0;
      } 
    }
  }

  escreverMatrizNaTela();
}

function moverParaEsquerda () {
  for(let linha = 0; linha < matriz.length; linha++) {
    let qtdColunas =  matriz[linha].length;
    for (let coluna = 0; coluna < qtdColunas; coluna++) {
     if(matriz[linha][coluna] == 0){
      matriz[linha][coluna] = matriz[linha][coluna + 1] || 0;
      if(coluna + 1 < qtdColunas) {
        matriz[linha][coluna + 1] = 0;
      }
     }
    }
  }
  escreverMatrizNaTela();
}

function escreverMatrizNaTela () {
  escreverLinha('-----------------------------------');
  pularLinha();
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