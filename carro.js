let xCarros = [600, 600, 600];
let yCarros = [40, 96, 150];
let xCarros2 = [-100, -100, -100];
let yCarros2 = [210, 263, 318];
let velocidadeCarros = [2, 2.5, 3.2];
let velocidadeCarros2 = [3.2, 5, 2.5]
let comprimentoCarros = 50;
let alturaCarros = 40;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  }
  for (let u = 0; u < imagemCarrosVia2.length; u++){
    image(imagemCarrosVia2[u], xCarros2[u], yCarros2[u], comprimentoCarros, alturaCarros);
  }
}

function movimentaCarro1(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
  for (let u = 0; u < imagemCarrosVia2.length; u++){
    xCarros2[u] += velocidadeCarros2[u];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
  for (let u = 0; u < imagemCarrosVia2.length; u++){
    if (passouTodaTela2(xCarros2[u])){
      xCarros2[u] = -100;
    }
  }
}

function passouTodaTela(xCarros,){
  return xCarros < -50
}

function passouTodaTela2(xCarros2){
  return xCarros2 > 500
}