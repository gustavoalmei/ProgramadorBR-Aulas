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