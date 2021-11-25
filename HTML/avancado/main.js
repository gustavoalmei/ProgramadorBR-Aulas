// Pegando atributo personalizado HTML

// setAttribute = criando um novo atributo
// getAttribute = pegando o atributo

// HTML
// <ul id="lista" num="10">
// </ul>

// JS
// let lista = document.getElementById("lista")
// let num = parseInt(lista.getAttribute("num"))
// let conteudo = ""

// for(let i = 0; i < num; i++){
//     conteudo += `<li>${i}</li>`
// }
// lista.innerHTML = conteudo

// Melhorando o atributo personalizado

// HTML
//  <ul id="lista" data-numb="15" data-id=32>

//  </ul>

// JS
// let lista = document.getElementById("lista")

// lista.dataset.n = "5"; definindo um valor fixo

// let id = lista.dataset.id; seria a mesma coisa que um obj, colocar data-(valor) é uma boa prática
// console.log(id)

// let num = parseInt(lista.dataset.n); convertendo a string para number.

// let conteudo = ""
// for(let i = 0; i < num; i++){
//     conteudo += `<li>${i}</li>`
// }
// lista.innerHTML = conteudo

// HTML

// preload = "auto" - irá carregar uma parte do video
// preload = "metadata" - irá carregar algumas informações do vídeo apenas
// preload = "none" - o video irá carregar apenas quando o usuario clicar no play

// controls = mostrará os controles do player
// autoplay = iniciara o vídeo automaticamente
// poster = é usado para escolher uma thumbnail do video

// <video controls preload="" src="Tillmann - AUGE ft. Caio Luccas (Prod. @_yungdrum).mp4" poster="thumbnail"></video>

// Adicionando JS ao video

// let video = document.getElementById("video1")

// function play(){
//     video.play()
// }

// function pause(){
//     video.pause()
// }

// function stopVideo(){
//     video.pause()
//     video.currentTime = 0;
// }

// function upVolume(){
//     video.volume += 0.05;
// }

// function downVolume(){
//     video.volume -= 0.05;
// }

// HTML
// <div class="container">

// <video class="video" id="video1"
// src="video.mp4"
// ></video>

// <div class="controler">
// <i onclick="play()" class="fas fa-play"></i>
// <i onclick="pause()" class="fas fa-pause"></i>
// <i onclick="stopVideo()" class="fas fa-stop"></i>
// <i onclick="upVolume()" class="fas fa-volume-up"></i>
// <i onclick="downVolume()" class="fas fa-volume-down"></i>
// </div>
// </div>

// Iframe 
// <h1>Esta é a página 2</h1>
// <iframe src="https://player.vimeo.com/video/76979871?h=8272103f6e" width="640" height="360" />/ allow="autoplay;"></iframe>
// <!-- é a forma de colocar o conteudo de outra pagina -->

// Animação com HTML
// JS
/*
 let quadradoPequeno = document.querySelector(".quadradoPequeno")

 let xInicial = 0;
 let yInicial = 0;

 function moverQuadrado(x,y){
   let PosX = x + "px";
   let PosY = y + "px";

   quadradoPequeno.style.top = PosY
   quadradoPequeno.style.left = PosX
 }

 setInterval(()=>{
   moverQuadrado(xInicial++, yInicial++)
 }, 24)
*/

// html 

/* <div class="quadradoGrande">
  <div class="quadradoPequeno">
  </div>
</div> */

// Css

/* 
.quadradoGrande{
   width: 500px;
   height: 500px;
   position: relative;
   overflow: hidden;
   background-color: blue;
 }

 .quadradoPequeno{
   width: 25px;
   height: 25px;
   position: absolute;
   top: 20px;
   left: 20px;
   background-color: brown;
 }
 */

// Canvas - Linhas
// pode ser usado no código html (para coisas pequenas)

// HTML
/* 
  <canvas id="tela" width="500px" height="500px"></canvas>
*/

// JS
// let contexto = document.querySelector("#tela")
// let ctx = contexto.getContext("2d")


// ctx.moveTo(0,0) // largura, altura
// ctx.lineTo(100,200) // largura, altura
// ctx.lineTo(200,0) // largura, altura
// ctx.moveTo(0,0) // largura, altura
// ctx.lineTo(200, 0) // largura, altura
// ctx.strokeStyle = "red";
// ctx.lineWidth = 5; // espessura da linha

// ctx.stroke() // irá fazer o desenho

// caso faça alguma alteração via css no canvas, nas linhas por exemplo, dependendo da modificação, a linha poderá ficar mais pixelada.

// Canvas - Retangulo
//HTML
/* 
  <canvas id="tela" width="500px" height="500px"></canvas> 
*/

// JS
/*
let contexto = document.querySelector("#tela")
let ctx = contexto.getContext("2d")

ctx.rect(50, 10, 100, 250)
// ctx.fillRect(50, 10, 100, 250) // eixo X, eixo Y, Largura, altura

ctx.fillStyle = "pink";
// ctx.strokeRect(50, 10, 100, 250) // Criando a borda

ctx.strokeStyle = "black";
ctx.lineWidth = 15;

ctx.fill() // vai criar o preenchimento
ctx.stroke()
ctx.clearRect(75, 60, 50, 50)  // eixo X, eixo Y, Largura, altura
*/

// Canvas - Inicio e Fim do caminho (Path)

/*JS
let contexto = document.querySelector("#tela")
let ctx = contexto.getContext("2d")

ctx.beginPath() // inicar uma nova linha
ctx.lineWidth = 5;
ctx.strokeStyle = "black"
ctx.moveTo(10,50)
ctx.lineTo(290,450)
ctx.stroke()

ctx.beginPath() // inicar uma nova linha, sem essa parte do codígo, a linha iria continuar, e a cor iria sobrescrever 
ctx.lineWidth = 5;
ctx.strokeStyle = "red"
ctx.fillStyle = "green"
ctx.moveTo(300,50)
ctx.lineTo(400,450)
ctx.lineTo(10,50)
ctx.closePath() // ira fechar a linha
ctx.fill() // se o fill ficar antes do stroke, a borda ficara por cima do preenchimento, caso contrario, ela ficara por baixo do preenchimento
ctx.stroke()
*/

/*HTML
  <canvas id="tela" width="500px" height="500px"></canvas>
*/

// Canvas - Circles

/*
JS
let contexto = document.querySelector("#tela")
let ctx = contexto.getContext("2d")

let x = 250
let y = 250
let raio = 100

let inicio = 0
let fim = 2 * Math.PI // é medido em radianos, 2 pi radianos é um circulo inteiro

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = "red"
ctx.fillStyle = "blue"
ctx.arc(x, y, raio, inicio, fim)

ctx.closePath()
ctx.fill()
ctx.stroke()
*/

/*
HTML
  <canvas id="tela" width="500px" height="500px"></canvas>
*/