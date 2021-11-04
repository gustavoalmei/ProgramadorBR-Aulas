// Window
// é o Objeto mais importante, onde tem vários outro objetos
//Document
// a propriedade window.document é onde tera todo o documento HTML

// document.body.innerHTML = "<p>Paragráfo adicionado com JS</p>" + window.document.body.innerHTML

// let p1 = document.getElementById("p1")
// console.log(p1) ira mostrar o paragrafo do id p1

// let paragrafos = document.getElementsByClassName("p2")
// console.log(p2[0]) ira mostrar o paragrafo da class p2 conforme seu index

// let th = document.getElementsByTagName("h1")
// console.log(p1) ira mostrar o paragrafo com da tag h1

// let tp = document.getElementsByTagName("p")
// console.log(p1) ira mostrar o paragrafo com da tag p

// Modificando elementos
// let p1 = document.getElementById("p1")
// let p2 = document.getElementsByClassName("p2")
// let p3 = document.getElementsByClassName("p3")
// p1.innerHTML = "<h2>Parágrafo 1</h2>" // ira alterar o código HTML
// p2[0].innerText = "<h3>Parágrafo 2</h3>" // ira alterar/mostrar o texto, mostrara/alterara somente o texto da tela
// p3[0].textContent = "<h2>Parágrafo 3</h2>" // ira alterar/mostrar o texto, também mostrara/alterara tudo o texto que possuí no HTML
// p1.className = "" o p1 irá perder a classe dele
// p1.style = "color:white" posso alterar o style 
// let meuAtt = p1.getAttribute("meuAtt") ira pegar o atributo criado no HTML
// p1.setAttribute("meuAtt", "Carlin") ira alterar o valor do meu atribute para "carlin"
// p1.setAttribute("novoAtt", "outra att") ira criar um novo atributo, com o seu valor
// p1.style.backgroundColor = "black" pode ser alterado o style da propriedade

//  --
// <div id="id">
// <h1>Titulo</h1>
// <p class="p1" id="p1">Parágrafo 1</p>
// <p meuAtt="Gustavo" class="p2">Parágrafo 2 <span>outro texto</span></p>
// <p class="p3">Parágrafo 3</p>
// <p>Parágrafo 4</p>
// </div>
// --

//Eventos - (DOM Events)
// Os parênteses nas funções
// - Em HTML deve se utilizar os ( ) para identificar que é uma função.
// - Em JS , quando quero executar a função eu coloco os ( ), mas quando eu quero apenas chamar a função ou atribuir ela a uma variável, eu coloco sem os ( ).

/* <div id="dom">
        <h1 id="h1">onclick</h1>
        <p onclick="hidenH1()" style="width: 80px;padding:20px; background-color: red; display: block;">Hidden H1</p>

        <h1 id="h2">onchange</h1>
        <input id="i" onchange="esconderH1(this)" type="text">

        <h1 id="h3">oninput</h1>
        <input oninput="escrever(this)" type="text">
</div>

<div>
        <p onmouseover="onOver(this)" onmouseout="onOverOut(this)" style="font-size:30px; color: blue;">Passe o mouse aqui!</p>

        <p onmouseover="mudarTitle()" onmouseout="padrao()"  style="font-size:30px; color: black;font-weight:bold;">Alterar title(passar o mouse)</p>
</div> */

// function hidenH1(){
//     let h1 = document.getElementById("h1")
//     h1.style.display = "none";
// }

// function esconderH1(i){
//     let h2 = document.getElementById("h2")
//     h2.innerText = i.value
// }

// function escrever(i){
//     let h3 = document.getElementById("h3")
//     h3.innerText = i.value
// }

// function onOver(a){
//     this.a = document.getElementsByTagName("p")
//     a.style.backgroundColor = "red"
//     a.style.display = "inline-block"
// }

// function onOverOut(a){
//     this.a = document.getElementsByTagName("p")
//     a.style.backgroundColor = "white"
//     a.style.display = "inline-block"
// }

// function mudarTitle(){
//     var a = document.getElementsByTagName("title")[0]
//     a.innerHTML = "Ticaricatica"
// }
// function padrao(){
//     var a = document.getElementsByTagName("title")[0]
//     a.innerHTML = "Document"
// }


/* 
    <div>
        <h1 onclick="loaded()" id="titulo">Cliquei Aqui!</h1>
    </div>

    function loaded(){
    let t = documentgetElementById("titulo")
    t.addEventListener("mouseover", alterarText)
    t.addEventListener("mouseout", mouseout)
}

function alterarText(){
    this.innerHTML = "Outro texto"
}

function mouseout(){
    this.innerHTML = "Novo texto" 
} */


// Comparando as maneiras de criar um evento

/* 
<div>
    <div>
    <h1 onclick="f(this)" id="evento">Title</h1> // evento criado no HTML
</div>
// window.onload = function(){
//     let h1 = document.getElementById("evento")
//     h1.addEventListener("click", f1); //         evento criado no JS
// }

// function f(e){
//     console.log("teste")
//     console.log(this) // this sera o window (sem o parametro)
//     console.log(e)
// }

// function f1(e){
//     console.log("teste f1")
//     console.log(this) // this sera o elemento (sem o parametro)
//     console.log(e) // será o evento
//     console.log(e.target) // será o elemento que está sofrendo o evento
// }*/

// Elementos pai e filhos
// let h1 = document.getElementById("d1")
// console.log(d.children[0])// ira pegar o filho do elemento
// console.log(d.parentElement)// ira pegar o pai do elemento

// let body = document.body.children[0] filhos do elemento body
// console.log(body)

/*
    <div id="d1">
        <h1>Titulo</h1>
        <p>qualquer texto</p>
    </div>

    <div id="d2">
        <h1>Titulo</h1>
        <p>qualquer texto</p>
    </div>

    window.onload = function(){
        let h1 = document.getElementsByTagName("h1")
        for(let h of h1){
        console.log(h)
        h.addEventListener("click", qop)
    }

    function qop(e){
        let t = e.target;
        console.log(t.parentElement)
    }
*/

// Biblioteca Math
// Math.pow(5,2) calculo de potencia Ex: 5 elevado a 2
// Math.sqrt(25) ira fazer o calculo da raiz quadrada do numero.
// Math.ceil(5.5) ira arredondar o valor para o valor acima
// Math.floor(5.99) ira arredondar o valor para o valor abaixo
// Math.round(Math.random() * 15)  - ira gerar um valor aleatório(Math.random()), e o valor sera arredondado(Math.round())

// JSON
// let a = {
//     nome: "Gustavo",
//     idade: 21
// }

// let b = JSON.stringify(a) // pega o Obj JSON e transforma em string

// let a2 = '{"nome": "Gustavo","idade": 21} '

// let b2 = JSON.parse(a2) // pega a string e transforma em Obj JSON

// console.log(a)
// console.log(b)
// console.log(a2)
// console.log(b2)

// Timer e Intervalo

// Timer 
// o timer será executado sómente uma vez.

// <script>
// let timer;
// let number = 0;
// function mudarTexto(){
//     let h = document.getElementsByTagName('h1')[0]

//     h.innerText += ` ${number}` 
//     number++
// }
// function iniciar(){
//    timer = setTimeout(mudarTexto, 3000)
// }
// function parar(){
//     clearTimeout(timer)  está função ira parar o timer
// }
// </script>
// <h1>Titulo</h1>
// <input onclick="iniciar()" type="submit" value="Inciar"></input>
// <input onclick="parar()" type="submit" value="Parar"></input>

// Intervalo 

// o intervalo será executado em um intervalo de tempo, no exemplo abaixo, ele será executado acada 3s

// <script>
// let intervalo;
// let number = 0;
// function mudarTexto(){
//     let h = document.getElementsByTagName('h1')[0]

//     h.innerText += ` ${number}` 
//     number++
// }
// function iniciar(){
//     intervalo = setInterval(mudarTexto, 3000)
// }
// function parar(){
//     clearTimeout(intervalo) está função ira parar o intervalo
// }
// </script>
// <h1>Titulo</h1>
// <input onclick="iniciar()" type="submit" value="Inciar"></input>
// <input onclick="parar()" type="submit" value="Parar"></input>

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