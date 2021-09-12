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

//Eventos - (DOM Events)
// Os parênteses nas funções
// - Em HTML deve se utilizar os ( ) para identificar que é uma função.
// - Em JS , quando quero executar a função eu coloco os ( ), mas quando eu quero apenas chamar a função ou atribuir ela a uma variável, eu coloco sem os ( ).