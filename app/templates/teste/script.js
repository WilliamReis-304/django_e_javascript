function adicionarItem(){
    let lista = document.getElementsByTagName("ul")[0]
    let item = document.createElement("li")
    item.innerHTML= document.getElementsByTagName("input")[0].value
    lista.appendChild(item)
}

function trocarItem(){
    let imagem = document.getElementsByTagName("img")[0]
    imagem.setAttribute("src","/app/templates/images/imagem_1.jpg")
}

// function valorInput(){
//     let entrada = document.getElementsByTagName("input")
//     let paragrafo = document.getElementsByTagName("p")[0]
//     paragrafo.innerHTML= `${entrada[0].value}`
// }

// function exibirSaudacoes(){
//     let entrada = document.getElementsByTagName("input")
//     // alert(`Olá, ${entrada[0].value}!`)

//     let paragrafo = document.getElementsByTagName("p")[0]
//     paragrafo.innerHTML= `Olá, ${entrada[0].value}!`
    
//     let body = document.getElementsByTagName("body")[0]
//     body.style = "background-color:grey"
    
//     entrada.value=""
    
//     entrada.placeholder="Enviado"
// }

// function valorInput(){
//     let entrada = document.getElementsByTagName("input")
//     console.log(`O valor é ${entrada[0].value}!`)
// }

// function autenticarUsuairo(){
//     let nome = prompt("Digite seu nome")
//     let senha = prompt("Digite sua senha")
//     validarUsuario(checarUsusario(nome,senha))
// }

// function checarUsusario(nome,senha){   
//     if(nome=="wil" && senha=="123"){
//         return true
//     }else{
//         return false
//     }
// }

// function validarUsuario(checagem){
//     if (checagem==true){
//         alert("Acessso permitido!Bem vindo, wil")
//     }else{
//         alert("Acesso negado! Tente novamente!")
//     }
// }

// autenticarUsuairo()

// function capturarTemperatura(){
//     let temp = Number(prompt("digite a temperatura"))
//     return temp
// }

// function converterTemperatura(capturarTemperatura){
//     return capturarTemperatura*(9/5)+32
// }

// function exibicao(capturarTemperatura,converterTemperatura){
//     alert(converterTemperatura(capturarTemperatura()))
// }

// exibicao(capturarTemperatura,converterTemperatura)

// var texto = prompt("Digite uma palavra")

// const contarVogais = (a) => {
//     let cont = 0
//     for(i of a){
//         switch (i){
//             case "a":
//                 cont++
//                 break
//             case "e":
//                 cont++
//                 break
//             case "i":
//                 cont++
//                 break
//             case "o":
//                 cont++
//                 break
//             case "u":
//                 cont++
//                 break
//             default:
//                 break
//         }
//     }
//     return cont
// }

// alert(contarVogais(texto))

// var numero1 = Number(prompt("Digite o numero"))
// var numero2 = Number(prompt("Digite o numero"))

// const multiplicar = (a,b) => a * b;

// alert(multiplicar(numero1,numero2))

// var numero1 = Number(prompt("Digite o numero"))
// var numero2 = Number(prompt("Digite o numero"))

// function resultado(resultado){
//     switch(resultado){
//         case true:
//             console.log("par")
//             break
//         case false:
//             console.log("impar")
//             break
//     }
// }

// function somaNumeros(numero1,numero2, parImpar){
//     let soma = numero1 + numero2
//     parImpar(soma)
// }

// function parImpar(soma,resultado){
//     if (soma%2 ==0){
//         resultado(true)
//     }else{
//         resultado(false)
//     }
// }

// somaNumeros(numero1,numero2)

// var numero = 50
// var contagem = 0
// var soma = 0
// while (numero>0){
//     contagem +=1 
//     numero-=1
//     console.log(soma+=contagem)
// }

// var numero = parseFloat(prompt("Digite o numero"))
// var resultado = 0
// var contagem = numero

// if (contagem>=0){
// while (contagem>0){
//     contagem-=1
//     if (numero%contagem==0){
//         resultado+=1
//     }else{
//         continue
//     }
// }}else{
// while (contagem<0){
//     contagem+=1
//     console.log(contagem)
//     if (numero%contagem==0){
//         resultado+=1
//     }else{
//         continue
//     }
// }}

// if (resultado == 1){
//     console.log(`O numero ${numero} é primo`)
// }else {
//     console.log(`O numero ${numero} não é primo`)
// }

// var somaNotas = 0
// var media = 0

// while (true){
//     var nota1 = parseFloat(prompt("Digite a nota"))
//     somaNotas += nota1
//     media += 1
//     var resposta = prompt("deseja adicionar mais notas?\nS->sim\nN->não")
//     if (resposta == "n"){
//         break
//     }else{
//         continue
//     }
// }

// console.log(`A média é ${somaNotas/media}`)
