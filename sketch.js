function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
  somDaTrilha.setVolume(0.5);
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro1();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  mostraPlacar();
  marcaPonto();
  fimDeJogo();
}




