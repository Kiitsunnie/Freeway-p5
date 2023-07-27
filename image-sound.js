//imagens do jogo
let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;

//sons do jogo
let somDoPonto;
let somDaTrilha;
let somDaColisao;

function preload(){
  imagemEstrada = loadImage("image/estrada.png");
  imagemAtor = loadImage("image/ator-1.png");
  imagemCarro1 = loadImage("image/carro-1.png");
  imagemCarro2 = loadImage("image/carro-2.png");
  imagemCarro3 = loadImage("image/carro-3.png");
  imagemCarro4 = loadImage("image/carro-1-2via.png");
  imagemCarro5 = loadImage("image/carro-2-2via.png");
  imagemCarro6 = loadImage("image/carro-3-2via.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3];
  imagemCarrosVia2 = [imagemCarro4, imagemCarro5, imagemCarro6];

  somDoPonto = loadSound("sounds/pontos.wav");
  somDaTrilha = loadSound("sounds/trilha.mp3");
  somDaColisao = loadSound("sounds/colidiu.mp3");
}