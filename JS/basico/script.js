// alerta 
// alert("Hello world")

// declarando váriaveis
// var a;
// var b;

// a = "hd"
// b = a

// Váriaveis com letras maiúsculas são diferentes de váriaveis com letras minúsculas. Ex: caixaGrande é diferente de caixagrande.

// console.log(b)

// tipos de dados

/*
Boolean / true ou false
null / não tem valor nenhum
undefined / não foi definido nenhum valor, podendo ter ou não
number / número
string / caracter
*/

// Opções aritméticas

/*
+ adição
- subtração
* multiplicação
/ divisão
% módulo
++ incremento
-- decremento
*/

// var a = 10;
// var b = 25;
// var c = a % b;

// console.log(c)

// Atribuições

/*
=        x = y       x = y
+=       x = y       x = x + y
-=       x = y       x = x - y
*=       x = y       x = x * y
/=       x = y       x = x / y
%=       x = y       x = x % y
*/  

// var a = 30;

// a += 10;

// a++

// É a mesma coisa que a = a + 10

// console.log(a)

// Operadores comparativos

// == igual a 
// === valor igual a igual 
// != não é igual 
// !== não é igual ou não igual 
// > maior que 
// < menor que 
// > = maior que ou igual a 
// < = menor que ou igual a 

// console.log( 2 == "2") o valor 2 é igual

// console.log( 2 === "2") o valor 2 é igual, porém, o tipo do valor é diferente, um é um Number, e outro é uma string 

// console.log( 3 != "3") os valores não são diferentes
// console.log( 3 !== "3") os valores não são diferentes, porém, o tipo é diferente

// Operadores lógicos

// && e  / para ser true, os dois valores devem ser truem, senao, será false
// || ou  / apenas um valor precisa ser true para o resultado ser true, caso contrário, sairá false
// Negativo ! / irá negar o valor

// (&&)
// var idade = 25;

// var maior20 = idade > 20;
// var menor30 = idade < 30;
// var entre = menor30 && maior20;

// console.log("Maior que vinte?", maior20)
// console.log("Menor que vinte?", menor30)
// console.log(entre)

// (||)
// var idade = 15;
// var menor18 = idade <= 18;
// var maior60 = idade >= 60;
// var vale = menor18 || maior60;

// console.log("Maior que vinte?", maior60)
// console.log("Menor que vinte?", menor18)
// console.log(vale)

// (Negativo)
// var idade = 35;

// var maior20 = idade > = 20;
// var menor20 = !maior20;

// console.log("Maior que vinte?", maior20)
// console.log("Menor que vinte?", menor20)

// String
// var numero = "9" * 2  ele irá calcular pq o valor é de um número, caso tenho uma letra, ele não iria calcular
// var str = "uma frase qualquer " caso tente calular com algum número, não será possível pois não tem nenhum número definido

// console.log(numero)

//Transformando Strings em Números

// var a = "3.2";
// var b = "9";
// var c = parseFloat(a) + parseInt(b);
// console.log(c)

// parseFloat transforma uma string em um valor com vírgula
// parseInt transforma uma string em um valor inteiro

//Alert e Prompt

// var nome = prompt("Fala meu consagrado, qual o teu nome?")

// if(nome == ""){
//     var nome = prompt("Por favor, digite o seu nome.")
//     if(nome == ""){
//         alert("Olá Desconhecido!")
//     }else{
//         alert(`Olá ${nome}!`)
//     }
// }else{
//     alert(`Olá ${nome}!`)
// }

// var numero = parseInt(prompt("Digite um número:"))
// var dobro = numero + numero;

// alert(`O dobro de ${numero} é ${dobro}.`)

// Condicionais - IF

// var idade = 10;

// if(idade <= 18 || idade >= 70){
//     console.log("Pode.");
//     console.log("Qual o seu pedido?")
// }else{
//     console.log("Não pode.");
//     console.log("Volte futuramente.")
// }

// Operador Ternário
// var idade = 15

// var pode = idade >= 18 ? true : false; 

// console.log(pode)

// Condicionais - Switch
// var nota_1 = 8.0;
// var nota_2 = 6.0;

// var media = (nota_1+nota_2) / 2

// var conceito = ""
// console.log(media)

// if(media <= 6){
//     conceito = "Nota baixa"
// }
// else if(media <= 8){
//     conceito = "Nota regular"
// }
// else{
//     conceito = "Ótima nota"
// }
// // conceito = "marromenos"

// switch(conceito){
//     case "Ótima nota":
//         console.log("Parabéns, continue assim!")
//     break
//     case "Nota regular":
//         console.log("Pode melhorar!")
//     break
//     case "Nota baixa":
//         console.log("Estude mais um pouco!")
//     break
//     default: mensagem padrão, aparecerá quando os valores acima não forem encontrados
//         console.log("Houve um erro.")
//     break
// }

// Repetição - FOR e WHILE
// var numero = 5;

// for(var i = 0; i <= numero; i++){
//     console.log(i + " Executado")
// }

// while (numero <= 15){ usada para quando não se sabe quantas vezes sera usada.
//     console.log(numero)
//     numero++
// }

// var number = Math.random() * 100;

// while(number < 50){
//     number = Math.random() * 100;
//     console.log(number)
// }

// Arrays ou vetores/array em outras linguagens 

// criando array
// var alunos = ["Gustavo", "Igor", "João", "Ana", "Beatriz", "Diovana"] // modo mais comum de se criar array
// var alunos_1 = new Array("Carlos", "Diego", "Bianca", "Barbara")
// console.log(alunos_1)
// console.log(alunos.length) // descobrindo a largura do array
// console.log(alunos[0]) // localizando o valor dentro do array pelo index(posição)

// for(var i in alunos){// irá passar a posição do index dos valores dentro do array para a variável i
//     console.log(i)
// }
    
// for(var aluno of alunos){// irá passar o valor do index dentro do array para a variável aluno
//     console.log(aluno)
// }

// for(var i = 0; i < alunos.length; i++){ ira informar o nome do aluno atráves do index passado
//     console.log(alunos[i])
// }

// sem usar array
// var aluno1 = "Gustavo"
// var aluno2 = "Diogo"
// var aluno3 = "Felipe"
// var aluno4 = "Pedro"
// console.log(aluno1)
// console.log(aluno2)
// console.log(aluno3)
// console.log(aluno4)

// Funções

// function calc(number_1, number_2){
// var value1 = number_1
// var value2 = number_2
// var media = (value1 + value2) / 2
    
//     return media
// }
// calculo1 = calc(10,56)
// calculo2 = calc(52,72)

// console.log(calculo1)
// console.log(calculo2)

// function saudacao(){
//     return "Olá mundo!"
// }

// var s = saudacao // nesse caso, a função saudacao, será passado para o var s, podendo ser executada também
// console.log(s) 
// console.log(s())

// var s = function (){
//     return "Saudações!"
// }

// console.log(s())

// Juntando tudo até aqui

// var aluno = ["Gustavo", "Igor", "Daiane"];
// var notaA = [6.5, 10, 7.5];
// var notaB = [8.0, 8.5, 4.0];

// function media(nota1, nota2){
//     return (nota1 + nota2) / 2
// }

// function passou(media){
//     if(media < 6){
//         return "Reprovado"
//     }
//     else{
//         return "Aprovado"
//     }
// }

// for(var index in aluno){
//     var nota1 = notaA[index];
//     var nota2 = notaB[index];
//     var m = media(nota1, nota2)
//     var resultado = passou(m)

//     console.log(`${aluno[index]} - ${nota1} - ${nota2} - ${m} - ${resultado}`)
// }

// Objetos - Propriedades
// propriedade = chave:valor, como se fosse uma variavel

// var modelos = new Object()
// var modelo = {
//     Marca: 991,
//     Modelo: "Porsche",
//     Ano: 2021
// }

// var outrosModelos = {
//     Marca: 991,
//     Modelo: "Porsche",
//     Anos: [2016, 2017, 2018, 2019, 2020, 2021]
// }
// var situacao = "Situação"
// modelo[situacao] = "Novo"
// // modelo["Situação"] = "Novo"
// // modelo.Situação = "Novo"

// console.log(outrosModelos["Ano"])
// console.log(outrosModelos)
// console.log(modelo)

// Objetos - Métodos
// função atribuida em um objeto

// var calcMedia = function(){
//     return (this.Notas[0] + this.Notas[1]) / 2 // this muda conforme o contexto, nesse caso o objeto apontado é aluno.notas
// }

// var aluno = {
//     Nome: "Gustavo",
//     Notas:[10, 5],
//     media: calcMedia
// }
// var aluno1 = {
//     Nome: "Joao",
//     Notas:[5, 8],
//     media: calcMedia
// }

// console.log(aluno.Nome)
// console.log(aluno.media())
// console.log(aluno1.Nome)
// console.log(aluno1.media())

// Objetos - Construtores

// function Aluno(nome, n1, n2){

//     this.nome = nome;    // objeto criado atráves de uma função, por isso usado o this
//     this.nota1 = n1;
//     this.nota2 = n2;

//     this.media = function(){
//     return (this.nota1 + this.nota2) / 2
//     }
// }

// var a = new Aluno("Gustavo", 6, 7)
// console.log(a)
// console.log(a.media())

// function criarAluno(nome, n1, n2){
//     return{
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: function(){
//             return (this.nota1 + this.nota2) / 2
//         }
//     }
// }

// var turma = [
//     criarAluno("Gustavo", 6, 7),
//     criarAluno("Joao", 9, 7)
// ]

// // var aluno = turma[0]

// turma.forEach(function(elemento){
//     console.log(elemento) // uma maneira mais avançada do for.in
// })

// for(var aluno of turma){
//     console.log(`${aluno.nome} - ${aluno.media()}`)
// } 

// Objetos - Resumo
// function obj(name, age){ // função que cria um obj usando new
//     this.nome = name
//     this.idade = age   
// }
// var a = new obj("Gustavo", 21)

// function obj(n, i){ // funcao que cria obj simples
//     return{
//         nome: n,
//         idade: i
//     }
// }
// var a = obj("Gustavo", 21)
// console.log(a)

// Datas
// var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
// var d = new Date()
// var d = new Date("05/12/2020")
// var d = new Date("05-12-2020")
// var d = new Date("05/12/2020")
// d.setDate(21) // alterar o dia / pode alterar as outras coisas como hora, dia, mes, etc
// console.log(d.getHours()) // retorna a data / pode retornar as outras coisas como hora, dia, mes, etc
// var mes = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
// console.log(mes[d.getDay()])
// console.log(d)

// Const, Let e Var

 // var a = 1  variável global, podendo ser acessada de qualquer lugar
 // let b = 2  variável de escopo, pode ser acessado somente no escopo criado, pode ser reatribuida, pode receber outros valores
 // const c = 3  variável de escopo, pode ser acessado somente no escopo criado, não pode ser reatribuida

// {
//     var a = 1
//     let b = 2
//     const c = 3
// }

// console.log(a)
// console.log(b)
// console.log(c)