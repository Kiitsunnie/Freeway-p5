let meusPontos = 0;

function mostraPlacar(){
    textAlign (CENTER);
    fill(color(255, 240, 60));
    textSize (25);
    text (meusPontos, width / 2, 27);
}

function marcaPonto(){
    if(yAtor < 20){
        meusPontos += 1;
        somDoPonto.play();
        voltaPosicaoInicialAtor();
    }
}

function pontosMaiorQueZero(){
    return meusPontos > 0;
}

function fimDeJogo(){
    if (meusPontos === 7){
        fill(color(300));
        textSize(30);
        text('Congratulations!', 250, 180);
        noLoop();
    }
}

