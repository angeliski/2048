const matriz = [
  [4,0,2,2],
  [0,0,0,0], 
  [0,0,0,0], 
  [2,0,0,0]
];

let matrizFusao = [[],[], [], []];

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

function proximaPosicao(matriz, linha, coluna, movimento) {
  if(movimento === 'direita'){
    return matriz[linha][coluna -1];
  }
} 

function zerarProximaPosicao(matriz, linha, coluna, movimento) {
  if(movimento === 'direita'){
    matriz[linha][coluna -1] = 0; 
  }
} 

function posicaoAtual(matriz, linha, coluna){
  return matriz[linha][coluna];
}

function moverParaDireita() {
  const movimento = 'direita';
  let teveMovimento = true;
  matrizFusao = [[],[], [], []];

  while(teveMovimento) {
    teveMovimento = false;
    for(let linha = 0; linha < matriz.length; linha++) {
      for (let coluna = matriz[linha].length - 1; coluna >= 0; coluna--) {
        if((posicaoAtual(matriz,linha,coluna) == 0 && proximaPosicao(matriz, linha, coluna, movimento) != 0) 
        || (posicaoAtual(matriz,linha,coluna) == proximaPosicao(matriz, linha, coluna, movimento) 
        && proximaPosicao(matriz, linha, coluna, movimento) != 0) || 0) {
          teveMovimento = true;
          if((posicaoAtual(matriz,linha,coluna) == proximaPosicao(matriz, linha, coluna, movimento) || 0) && !matrizFusao[linha][coluna]) {
            matriz[linha][coluna] += proximaPosicao(matriz, linha, coluna, movimento) || 0;
            matrizFusao[linha][coluna] = true;
          } else if(posicaoAtual(matriz,linha,coluna) == 0 && proximaPosicao(matriz, linha, coluna, movimento) != 0){
            matriz[linha][coluna] = proximaPosicao(matriz, linha, coluna, movimento) || 0;
          }else {
            teveMovimento = false;
          }
          if(teveMovimento){
            zerarProximaPosicao(matriz, linha, coluna, movimento);
          }
        }         
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