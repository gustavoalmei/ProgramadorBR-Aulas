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
// src="Tillmann - AUGE ft. Caio Luccas (Prod. @_yungdrum).mp4"
// ></video>

// <div class="controler">
// <i onclick="play()" class="fas fa-play"></i>
// <i onclick="pause()" class="fas fa-pause"></i>
// <i onclick="stopVideo()" class="fas fa-stop"></i>
// <i onclick="upVolume()" class="fas fa-volume-up"></i>
// <i onclick="downVolume()" class="fas fa-volume-down"></i>
// </div>
// </div>

let inputInstagram = document.querySelector('#inputInstagram')
let inputTwitter = document.querySelector('#inputTwitter')
let socialMedia = document.querySelector('.socialMedia')
let social = document.querySelector('.social')

const User = {
  instagram: "",
  twitter:""
}

// User.instagram = inputInstagram.value
// User.twitter = inputTwitter.value
// `https://www.${social}.com/${User[social]}`

function ChangeName(){
  
  for (let link of social.children) {
    let social = link.getAttribute("id")
    
    link.textContent = social
    
  }

  for(let info of socialMedia.children){
    let social = info.getAttribute("class")
    
    
    
  }
}

