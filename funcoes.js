const game =  document.getElementById('game');
function clear() {
    game.innerHTML = '';
  }
  
  function escreverLinha(text) {
    game.innerHTML += text;
  }
  
  function pularLinha() {
      escreverLinha('<br>');
  };
  
  
  function posicaoAtual(matriz, linha, coluna){
    return matriz[linha][coluna];
  }
  
  function posicaoAtualEstaVazia(matriz, linha, coluna) {
    return posicaoAtual(matriz, linha, coluna) === 0;
  }
  
  function proximaPosicaoNaoFoiCombinada(matrizFusao, linha, coluna, movimento) {
    return !proximaPosicao(matrizFusao, linha, coluna, movimento);
  }
  
  function posicaoAtualNaoFoiCombinada(matrizFusao, linha, coluna) {
    return !matrizFusao[linha][coluna];
  }
  
  function aindaNaoChegouAoFim(linha, coluna, quantidade, movimento) {
    if(movimento == 'cima') {
      return linha + 1 <= quantidade;
    }else if(movimento == 'esquerda') {
      return coluna + 1 <= quantidade;
    }
  }
  
  function proximaPosicaoEstaVazia(matriz, linha, coluna, movimento) {
    return proximaPosicao(matriz, linha, coluna, movimento) === 0;
  }
  
  function posicaoAtualEhIgualAProxima(matriz, linha, coluna, movimento) {
    return posicaoAtual(matriz, linha, coluna) === proximaPosicao(matriz, linha, coluna, movimento);
  }
  
  function proximaPosicaoEstaPreenchida(matriz, linha, coluna, movimento) {
    return proximaPosicao(matriz, linha, coluna, movimento) !== 0;
  }
  
  function proximaPosicao(matriz, linha, coluna, movimento) {
    if(movimento === 'direita'){
      return matriz[linha][coluna - 1] || 0;
    } else if(movimento === 'esquerda') {
      return matriz[linha][coluna + 1] || 0;
    } else if(movimento === 'cima') {
      return matriz[linha + 1][coluna] || 0;
    } else if(movimento === 'baixo') {
      return matriz[linha - 1][coluna] || 0;
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
  