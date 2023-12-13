'use strict'
// const pizzas=[
//     {
//         nome: "Pizza de calabreza com queijo",
//         preco: "16,00",
//         fundo: "fav1"
//     },
//     {
//         nome: "Pizza de peperoni com queijo",
//         preco: "19,00",
//         fundo: "fav2"
//     },
// ]

const pizzasFavoritas = [
   {
    nome: "Pizza de calabreza com queijo",
    preco: "16,00",
    fundo: "fav1"
   },
   {
    nome: "Pizza de peperoni com queijo",
    preco: "19,00",
    fundo: "fav2"
   },
   {
    nome: "Pizza de peperoni com queijo",
    preco: "19,00",
    fundo: "fav2"
   },{
   nome: "Pizza de peperoni com queijo",
   preco: "19,00",
   fundo: "fav2"
   }
//    {
//     nome: "",
//     preco: "",
//     fundo: "fav3"
//    }
]
const pizzasRecomendadas = [
    {
     nome: "Pizza de peperoni com queijo e tomate",
     preco: "16,00",
     fundo: "rec1"
    },
    {
     nome: "Pizza brotinho com queijo e tomate",
     preco: "12,00",
     fundo: "rec2"
    },
]
const bebidas = [
    {
        nome:"Coca-cola 2L",
        descricao:"Refrigerante Garrafa 3l Embalagem Econômica",
        preco:"14,99",
        imagem:"coke",
    },
    {
        nome:"Cerveja Heineken",
        descricao:"Refrigerante Garrafa 3l Embalagem Econômica",
        preco:"17,99",
        imagem:"heineken",
    },
]

function criarPizzasFavoritas(pizzasFavoritas){
    const listaFavoritas = document.getElementById('lista-favoritas')

    const favorita = document.createElement('a')
    favorita.classList.add('favorita')
    favorita.href="./detalhesProduto.html"
    favorita.style.backgroundImage=`url(./img/favoritas/${pizzasFavoritas.fundo}.png)`

    const precoFav = document.createElement('div')
    precoFav.classList.add('preco')
    
    const nomePizzaFavorita = document.createElement('div')
    nomePizzaFavorita.classList.add('nomePizza')
    nomePizzaFavorita.classList.add('fundoTitulo')

    favorita.replaceChildren(precoFav,nomePizzaFavorita)
    listaFavoritas.appendChild(favorita)
    
    precoFav.textContent = "R$ "+pizzasFavoritas.preco
    nomePizzaFavorita.textContent=pizzasFavoritas.nome
}

function criarPizzasRecomendadas(pizzasRecomendadas){
    const listaRecomendados = document.getElementById('lista-recomendados')

    const recomendado = document.createElement('a')
    recomendado.classList.add('recomendado')
    recomendado.style.backgroundImage=`url(./img/recomendadas/${pizzasRecomendadas.fundo}.png)`

    const precoRec = document.createElement('div')
    precoRec.classList.add('preco')

    const nomePizzaRecomendada = document.createElement('div')
    nomePizzaRecomendada.classList.add('nomePizza')

    recomendado.replaceChildren(precoRec,nomePizzaRecomendada)
    listaRecomendados.appendChild(recomendado)

    precoRec.textContent = "R$ "+pizzasRecomendadas.preco
    nomePizzaRecomendada.textContent=pizzasRecomendadas.nome

}
function criarBebidas(bebidas){
    const listaBebidas = document.getElementById('lista-bebidas')

    const bebida = document.createElement('div')
    bebida.classList.add('bebida')

    const imgBebidaDiv = document.createElement('div')
    imgBebidaDiv.classList.add('imagemBebida')

    const imgBebida = document.createElement('img')
    imgBebida.src=`./img/bebidas/${bebidas.imagem}.png`

    const contentBebida = document.createElement('div')
    contentBebida.classList.add('contentBebida')

    const textContentBebida = document.createElement('div')
    textContentBebida.classList.add('textContentBebida')

    const nomeBebida = document.createElement('div')
    nomeBebida.classList.add('nomeBebida')
    nomeBebida.textContent=bebidas.nome

    const descricaoBebida = document.createElement('div')
    descricaoBebida.classList.add('descricaoBebida')
    descricaoBebida.textContent=bebidas.descricao

    const precoBebida = document.createElement('div')
    precoBebida.classList.add('preco')
    precoBebida.textContent = "R$ "+bebidas.preco

    const precoRec = document.createElement('div')
    precoRec.classList.add('preco')

    const nomePizzaRecomendada = document.createElement('div')
    nomePizzaRecomendada.classList.add('nomePizza')

    textContentBebida.replaceChildren(nomeBebida,descricaoBebida)
    contentBebida.replaceChildren(textContentBebida,precoBebida)
    imgBebidaDiv.replaceChildren(imgBebida)
    bebida.replaceChildren(imgBebidaDiv,contentBebida)
    listaBebidas.appendChild(bebida)

    precoRec.textContent = "R$ "+pizzasRecomendadas.preco
    nomePizzaRecomendada.textContent=pizzasRecomendadas.nome

}
pizzasFavoritas.forEach(criarPizzasFavoritas)
pizzasRecomendadas.forEach(criarPizzasRecomendadas)
bebidas.forEach(criarBebidas)