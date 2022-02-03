//declarando variáveis
var trex, trex_running;

//preload carrega as midías
function preload(){
 //animação do Trex
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
 
  //imagem do solo
  
}
//setuo faz aconfiguração
function setup(){
  createCanvas(600,200)
  // criando as bordas
 
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  // adicione dimensão e posição ao trex
  trex.addAnimation("running", trex_running);
  trex.scale=0.5;
  //sprite do solo

}
//draw faz o movimento, a ação do jogo
function draw(){
  background("#abedeb")
  

  // fazero trex pular
  if (keyDown("space ")) {
       trex.VelocityY = -10;
 }
 //coordenadas do mouse na tela
 text("X: "+mouseX+"  / Y: "+mouseY,mouseX,mouseY);
  
 // chamando a  função de gravidade

  //colisão do trex com as bordas

  
 drawSprites();

}
// função de gravidade

