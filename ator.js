let xAtor = 100;
let yAtor = 369;
let colisao = false;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 12.5)
    if (colisao){
      somDaColisao.play();
      somDaColisao.setVolume(0.5);
      voltaPosicaoInicialAtor();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
  for (let u = 0; u < imagemCarrosVia2.length; u++){
    colisao = collideRectCircle(xCarros2[u], yCarros2[u], comprimentoCarros, alturaCarros,xAtor, yAtor, 12.5)
    if (colisao){
      somDaColisao.play();
      somDaColisao.setVolume(0.5);
      voltaPosicaoInicialAtor();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaPosicaoInicialAtor(){
  yAtor = 369;
}

function podeSeMover(){
  return yAtor < 369;
}
