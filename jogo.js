
// Importa as sprites
const sprites = new Image();

sprites.src='./sprites.png';
//Seleciono minha tag Canvas no HTML
const canvas = document.querySelector('canvas');

const contexto = canvas.getContext('2d');
let frames =0;

const flappyBirdOriginal={
    sptiteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x:10,
    y: 50,
    pulo:4.6,
    gravidade:0.1,
    velocidade:0,
    avanco:0.25,
    movimento:[
        {spriteX:0, spriteY:0},
        {spriteX:0, spriteY:26},
        {spriteX:0, spriteY:52},
    ],
}
function ReinicandoValoresFlappy(flappyOriginal){
    flappyBird.y= flappyBirdOriginal.y;
    flappyBird.x=flappyBirdOriginal.x;
    flappyBird.velocidade=flappyOriginal.velocidade;
}
const canos={
    ceu:{
    spriteX:52,
    spriteY:169,
    },
    chao:{
        spriteX:0,
        spriteY:169,
        },
    largura:52,
    altura:400,
    espaco:60,
    
   desenha(){
      
        canos.pares.forEach(function(par){
            const espacamentoEntreCanos=150;
            const yRandom=par.y;
     
     
            const canoCeuX=par.x;
            const canoCeuY=yRandom;
            contexto.drawImage(
                sprites,
                canos.ceu.spriteX,canos.ceu.spriteY,
                canos.largura,canos.altura,
                canoCeuX,canoCeuY,
                canos.largura,canos.altura
        
        
               )
       
               const canoChaoX=par.x;
               const canoChaoY=canos.altura +espacamentoEntreCanos+yRandom;
               contexto.drawImage(
                sprites,
                canos.chao.spriteX,canos.chao.spriteY,
                canos.largura,canos.altura+canos.espaco,
                canoChaoX,canoChaoY,
                canos.largura,canos.altura
        
        
               )
               par.canoCeu={
                   x:canoCeuX,
                   y:canos.altura+canoCeuY,
               }
               par.canoChao={
                   x:canoChaoX,
                   y:canoChaoY,
               }


        })
     
        
        
 
   },
   temColisaoComOFlappyBird(par){
       const cabecaDoFlappy=flappyBird.y;
       const peDoFlappy=flappyBird.y+flappyBird.altura;
if(flappyBird.x>=par.x){
    if(cabecaDoFlappy<= par.canoCeu.y){
        return true;
    }
if(peDoFlappy>=par.canoChao.y){
    return true
}
if(cabecaDoFlappy<=par.canoCeu.y){
    return true
}
return false;
}


   },
   pares:[], 
   atualiza(){
const passou100Frames = frames% 100===0;
if(passou100Frames){
canos.pares.push({x:canvas.width,y:-150*(Math.random()+1)});

  
}
canos.pares.forEach(function(par){
    par.x=par.x-2;

    if(canos.temColisaoComOFlappyBird(par)){
        mudaDeTela(Telas.inicio);
    }
    if(par.x<=-50){
        canos.pares.shift();
    }

})

},
    
}



const planoDeFundo ={

    spriteX:390,
    spriteY:0,
    largura:275,
    altura:204,
    x:0,
    y:canvas.height - 204,
    desenha(){
        //Seta a cor de fundo do ceu
        contexto.fillStyle='#70c5ce';
        contexto.fillRect(0,0,canvas.width,canvas.height);
        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            planoDeFundo.x,planoDeFundo.y,
            planoDeFundo.largura,planoDeFundo.altura,
        );

        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            planoDeFundo.x+planoDeFundo.largura,planoDeFundo.y,
            planoDeFundo.largura,planoDeFundo.altura,
        );
    }
   
}
const chao = {
    spriteX:0,
    spriteY:618,
    largura:224,
    altura:112,
    x:0,
    y: canvas.height - 100,
    desenha(){
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x, chao.y,
            chao.largura, chao.altura,
        );
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x+chao.largura, chao.y,
            chao.largura, chao.altura,
        );
        
    },
    atualiza(){
        const movimentoChao=0.2;

        const repeteEm = chao.largura/2;
    
        const movimento = chao.x-movimentoChao;
        chao.x=movimento%repeteEm;
        
    }
}
const mensagemGetReady={
    
    sX:134,
    sY:0,
    w:174,
    h:152,
    x:(canvas.width/2)-174/2,
    y:50,
    desenha(){
        contexto.drawImage(
        sprites,
        mensagemGetReady.sX, mensagemGetReady.sY,
        mensagemGetReady.w, mensagemGetReady.h,
        mensagemGetReady.x, mensagemGetReady.h,
        mensagemGetReady.w, mensagemGetReady.h
        );
    }
}

function fazColisao(flappyBird, chao){
    if(flappyBird.y+flappyBird.altura>=chao.y){

        return true;
    }else{
        return false;
    }
}
const flappyBird ={
    sptiteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x:10,
    y: 50,
    pulo:4.6,
    gravidade:0.25,
    velocidade:0,
    avanco:0.25,
    movimento:[
        {spriteX:0, spriteY:0},
        {spriteX:0, spriteY:26},
        {spriteX:0, spriteY:52},
    ],
    frameAtual:0,
    atualizaFrame(){
        framePronto=frames%10;
        if(framePronto ==0){
        const baseDoIncremento=1;
        const incremento = baseDoIncremento+flappyBird.frameAtual;
        const baseRepeticao = flappyBird.movimento.length;
        flappyBird.frameAtual=incremento%baseRepeticao;
    }

    },
    desenha() {
        flappyBird.atualizaFrame();
        const {spriteX, spriteY}=flappyBird.movimento[flappyBird.frameAtual];
    
        contexto.drawImage(
            
            sprites,
            spriteX,spriteY, //Sprite X, Sprite Y
            flappyBird.largura,flappyBird.altura,//Tamanho do Recorte na Sprite
            flappyBird.x,flappyBird.y,//Posição que vai ser desenhado na tela
            flappyBird.largura,flappyBird.altura,
            );
            
       
    },
    pula(){
        flappyBird.velocidade = - flappyBird.pulo;
    },
    atualiza(){
        if(fazColisao(flappyBird,chao)){
            

            mudaDeTela(Telas.inicio);
        }else{

        
flappyBird.x = flappyBird.x +flappyBird.avanco;
flappyBird.velocidade = flappyBird.velocidade+flappyBird.gravidade;
flappyBird.y = flappyBird.y +flappyBird.velocidade;

        }

    }

}


//
//[Telas]
//
let telaAtiva={};


function mudaDeTela(novaTela){
telaAtiva=novaTela;
}
const Telas ={
    inicio:{
        desenha(){
            planoDeFundo.desenha();
            chao.desenha();
            mensagemGetReady.desenha();
            flappyBird.desenha();
            
            
          
        },
        click(){
            mudaDeTela(Telas.jogo);
        },
        atualiza(){
           canos.pares=[];
            ReinicandoValoresFlappy(flappyBirdOriginal);
            chao.atualiza();
            
            Telas.inicio.desenha();
             
        }
    },

    jogo:{
        desenha(){
            planoDeFundo.desenha();
            canos.desenha();

            chao.desenha();
            flappyBird.desenha();
          

        },
        atualiza(){
            
            chao.atualiza();
            canos.atualiza();
            flappyBird.atualiza();
            Telas.jogo.desenha();

        },
        click(){
            flappyBird.pula();
        }
    }

}
function loop(){
   
    telaAtiva.atualiza();
   
    
   
   //telaAtiva.atualiza();

    frames= frames +1;
    //Faz acontece a atualização de quadros
    requestAnimationFrame(loop);
}

window.addEventListener('click', function(){
    if(telaAtiva.click){
        telaAtiva.click();
    }
})

mudaDeTela(Telas.inicio);
loop();

