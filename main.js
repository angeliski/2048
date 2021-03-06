const matriz = [
  [0,0,0,0],
  [0,0,0,0], 
  [0,0,0,0], 
  [0,0,0,0]
];

let matrizFusao = [[],[], [], []];
let matrizTentativas = [[],[], [], []];

function adicionarNumeroAleatorio() {
  matrizTentativas = [[],[], [], []];
  
  let tentarInserir = true; 
  while(tentarInserir) {
    let linha = Math.floor(Math.random() * 4);
    let coluna = Math.floor(Math.random() * 4); 

    if(posicaoAtualEstaVazia(matriz,linha, coluna) && posicaoAtual(matrizTentativas, linha, coluna) !== 'X') {
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
      if (posicaoAtualEstaVazia(matriz, linha, coluna)) {
        return false;
      }
    }
  }
  return true;
}

function moverDoComecoParaOFim(matriz, matrizFusao, linha, coluna, movimento, qtdLinhas) {
  let teveMovimento = false;
  if ((posicaoAtualEstaVazia(matriz, linha, coluna) && proximaPosicaoEstaPreenchida(matriz, linha, coluna, movimento))
    || (posicaoAtualEhIgualAProxima(matriz, linha, coluna, movimento) && proximaPosicaoEstaPreenchida(matriz, linha, coluna, movimento))) {
    teveMovimento = true;
    if (posicaoAtualEhIgualAProxima(matriz, linha, coluna, movimento)
      && posicaoAtualNaoFoiCombinada(matrizFusao, linha, coluna)
      && proximaPosicaoNaoFoiCombinada(matrizFusao, linha, coluna, movimento)) {
      matriz[linha][coluna] += proximaPosicao(matriz, linha, coluna, movimento);
      matrizFusao[linha][coluna] = true;
    }
    else if (posicaoAtualEstaVazia(matriz, linha, coluna) && proximaPosicaoEstaPreenchida(matriz, linha, coluna, movimento)) {
      matriz[linha][coluna] = proximaPosicao(matriz, linha, coluna, movimento);
    }
    else {
      teveMovimento = false;
    }
    if (aindaNaoChegouAoFim(linha, coluna, qtdLinhas, movimento) && teveMovimento) {
      zerarProximaPosicao(matriz, linha, coluna, movimento);
    }
  }
  return teveMovimento;
}

function moverDoFimParaOComeco(matriz, matrizFusao, linha, coluna, movimento) {
  let teveMovimento = false;
  if ((posicaoAtualEstaVazia(matriz, linha, coluna) && proximaPosicaoEstaPreenchida(matriz, linha, coluna, movimento))
    || (posicaoAtualEhIgualAProxima(matriz, linha, coluna, movimento) && proximaPosicaoEstaPreenchida(matriz, linha, coluna, movimento))) {
    teveMovimento = true;
    if (posicaoAtualEhIgualAProxima(matriz, linha, coluna, movimento)
      && posicaoAtualNaoFoiCombinada(matrizFusao, linha, coluna)
      && proximaPosicaoNaoFoiCombinada(matrizFusao, linha, coluna, movimento)) {
      matriz[linha][coluna] += proximaPosicao(matriz, linha, coluna, movimento);
      matrizFusao[linha][coluna] = true;
    }
    else if (posicaoAtualEstaVazia(matriz, linha, coluna) && proximaPosicaoEstaPreenchida(matriz, linha, coluna, movimento)) {
      matriz[linha][coluna] = proximaPosicao(matriz, linha, coluna, movimento);
    }
    else {
      teveMovimento = false;
    }
    if (teveMovimento) {
      zerarProximaPosicao(matriz, linha, coluna, movimento);
    }
  }
  return teveMovimento;
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
       teveMovimento = teveMovimento || moverDoComecoParaOFim(matriz, matrizFusao, linha, coluna, movimento, qtdLinhas);
      }
    }
  }
}

function moverParaBaixo() {
  const movimento = 'baixo';
  let teveMovimento = true;
  matrizFusao = [[],[], [], []];
  
  while(teveMovimento) {
    teveMovimento = false;
    for(let linha = matriz.length - 1; linha > 0; linha--) {
      for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        teveMovimento = teveMovimento || moverDoFimParaOComeco(matriz, matrizFusao, linha, coluna, movimento); 
      }
    }
  }
}

function moverParaDireita() {
  const movimento = 'direita';
  let teveMovimento = true;
  matrizFusao = [[],[], [], []];

  while(teveMovimento) {
    teveMovimento = false;
    for(let linha = 0; linha < matriz.length; linha++) {
      for (let coluna = matriz[linha].length - 1; coluna >= 0; coluna--) {
        teveMovimento = teveMovimento || moverDoFimParaOComeco(matriz, matrizFusao, linha, coluna, movimento);
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
        teveMovimento = teveMovimento || moverDoComecoParaOFim(matriz, matrizFusao, linha, coluna, movimento, qtdColunas);
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
      escreverLinha(matriz[linha][coluna] || '_');
    }
    escreverLinha(' | ');
    pularLinha();
  }
}

function aguardarMovimentoDoJogador(event) {
  var key = event.keyCode ? event.keyCode : event.which;
  let movimentoValido = false;
  if(key === 40){
    moverParaBaixo();
    movimentoValido = true;
  } else if( key === 38){
    moverParaCima();
    movimentoValido = true;
  } else if( key === 39){
    moverParaDireita();
    movimentoValido = true;
  } else if( key === 37){
    moverParaEsquerda();
    movimentoValido = true;
  }

  if(movimentoValido) {
    clear();
    adicionarNumeroAleatorio();
    escreverMatrizNaTela();
  }
}

window.onkeyup = aguardarMovimentoDoJogador;

function start() {
  adicionarNumeroAleatorio();
  escreverMatrizNaTela();
}

start();
