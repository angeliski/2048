const matriz = [
  [0,0,0,0],
  [0,0,0,0], 
  [0,0,0,0], 
  [0,0,0,0]
];

let matrizFusao = [[],[], [], []];
let matrizTentativas = [[],[], [], []];

function escreverLinha(text) {
  document.write(text);
}

function pularLinha() {
    escreverLinha('<br>');
};

function adicionarNumeroAleatorio() {
  matrizTentativas = [[],[], [], []];
  
  let tentarInserir = true; 
  while(tentarInserir) {
    let linha = Math.floor(Math.random() * 4);
    let coluna = Math.floor(Math.random() * 4); 

    if(posicaoAtual(matriz, linha, coluna) === 0 && posicaoAtual(matrizTentativas, linha, coluna) !== 'X') {
      matriz[linha][coluna] = 2;
      tentarInserir = false;
    }else {
      matrizTentativas[linha][coluna] = 'X';
    }

    if(tentarInserir && todaAMatrizEstaPreenchida()){
      tentarInserir = false;
    }
  }

}

function todaAMatrizEstaPreenchida() {

  for(let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
      if (posicaoAtual(matriz, linha, coluna) === 0) {
        return false;
      }
    }
  }
  return true;
}


function moverParaCima ()  {
  const movimento = 'cima';
  let teveMovimento = true;
  matrizFusao = [[],[], [], []];
  
  while(teveMovimento ){
    teveMovimento = false;
    let qtdLinhas = matriz.length - 1;
    for(let linha = 0; linha < qtdLinhas; linha++) {
      let qtdColunas =  matriz[linha].length;
      for (let coluna = 0; coluna < qtdColunas; coluna++) {
       if((posicaoAtual(matriz,linha,coluna) == 0 && proximaPosicao(matriz, linha, coluna, movimento) != 0) 
        || (posicaoAtual(matriz,linha,coluna) == proximaPosicao(matriz, linha, coluna, movimento) 
        && proximaPosicao(matriz, linha, coluna, movimento) != 0) || 0) {
          teveMovimento = true;
          if((posicaoAtual(matriz,linha,coluna) == proximaPosicao(matriz, linha, coluna, movimento) || 0) 
          && !matrizFusao[linha][coluna] 
          && !proximaPosicao(matrizFusao, linha, coluna, movimento)) {
            matriz[linha][coluna] += proximaPosicao(matriz, linha, coluna, movimento) || 0;
            matrizFusao[linha][coluna] = true;
          } else if(posicaoAtual(matriz,linha,coluna) == 0 && proximaPosicao(matriz, linha, coluna, movimento) != 0){
            matriz[linha][coluna] = proximaPosicao(matriz, linha, coluna, movimento) || 0;
          }else {
            teveMovimento = false;
          }          

          if(linha + 1 <= qtdLinhas && teveMovimento) {
            zerarProximaPosicao(matriz, linha, coluna, movimento);
          }
       }
      }
    }
  }
  
}



function moverParaBaixo() {
  const movimento = 'baixo';
  let teveMovimento = true;
  matrizFusao = [[],[], [], []];
  
  while(teveMovimento ) {
    teveMovimento = false;
    for(let linha = matriz.length - 1; linha > 0; linha--) {
      for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        if((posicaoAtual(matriz,linha,coluna) == 0 && proximaPosicao(matriz, linha, coluna, movimento) != 0) 
        || (posicaoAtual(matriz,linha,coluna) == proximaPosicao(matriz, linha, coluna, movimento) 
        && proximaPosicao(matriz, linha, coluna, movimento) != 0) || 0) {
          teveMovimento = true;
          if((posicaoAtual(matriz,linha,coluna) == proximaPosicao(matriz, linha, coluna, movimento) || 0) 
          && !matrizFusao[linha][coluna]
          && !proximaPosicao(matrizFusao, linha, coluna, movimento)) {
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
}

function proximaPosicao(matriz, linha, coluna, movimento) {
  if(movimento === 'direita'){
    return matriz[linha][coluna - 1];
  } else if(movimento === 'esquerda') {
    return matriz[linha][coluna + 1] || 0;
  } else if(movimento === 'cima') {
    return matriz[linha + 1][coluna] || 0;
  } else if(movimento === 'baixo') {
    return matriz[linha - 1][coluna];
  }
} 

function zerarProximaPosicao(matriz, linha, coluna, movimento) {
  if(movimento === 'direita'){
    matriz[linha][coluna - 1] = 0; 
  } else if(movimento === 'esquerda') {
    matriz[linha][coluna + 1] = 0;
  } else if(movimento === 'cima') {
    matriz[linha  + 1][coluna] = 0
  } else if(movimento === 'baixo') {
    matriz[linha - 1][coluna] = 0;
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
          if((posicaoAtual(matriz,linha,coluna) == proximaPosicao(matriz, linha, coluna, movimento) || 0) 
          && !matrizFusao[linha][coluna]
          && !proximaPosicao(matrizFusao, linha, coluna, movimento)) {
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
}

function moverParaEsquerda () {
  const movimento = 'esquerda';
  let teveMovimento = true;
  matrizFusao = [[],[], [], []];

  while(teveMovimento) {
    teveMovimento = false;
    for(let linha = 0; linha < matriz.length; linha++) {
      let qtdColunas =  matriz[linha].length;
      for (let coluna = 0; coluna < qtdColunas; coluna++) {
       if( (posicaoAtual(matriz,linha,coluna) == 0 && proximaPosicao(matriz, linha, coluna, movimento) != 0) 
        || (posicaoAtual(matriz,linha,coluna) == proximaPosicao(matriz, linha, coluna, movimento) 
        && proximaPosicao(matriz, linha, coluna, movimento) != 0) || 0){
          teveMovimento = true;

          if((posicaoAtual(matriz,linha,coluna) == proximaPosicao(matriz, linha, coluna, movimento) || 0) 
          && !matrizFusao[linha][coluna]
          && !proximaPosicao(matrizFusao, linha, coluna, movimento)) {
            matriz[linha][coluna] += proximaPosicao(matriz, linha, coluna, movimento) || 0;
            matrizFusao[linha][coluna] = true;

          } else if(posicaoAtual(matriz,linha,coluna) == 0 && proximaPosicao(matriz, linha, coluna, movimento) != 0){
            matriz[linha][coluna] = proximaPosicao(matriz, linha, coluna, movimento) || 0;
          }else {
            teveMovimento = false;
          }

        if(coluna + 1 < qtdColunas && teveMovimento) {
          zerarProximaPosicao(matriz, linha, coluna, movimento);
        }
       }
      }
    }
  }
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
