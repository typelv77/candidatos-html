const candidatos = [
    {
       img:"",
       name:"Teago",
       profession:"engenheiro de software",
       birth:"07/07/1977",
       phone:"(27) 994263879",
       email:"Teago1227@gmail.com",
    },
    {
        img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffotos-premium%2Fcara-afro-americano-alegre-segurando-smartphone-e-sorrindo_116547-16838.jpg&tbnid=5rqyTYftlG9GdM&vet=12ahUKEwif46DzisyBAxVmBbkGHejmBf4QMygdegQIARBx..i&imgrefurl=https%3A%2F%2Fbr.freepik.com%2Ffotos%2Fpessoa-telefone&docid=s71S19vRkKyrFM&w=626&h=417&itg=1&q=fotos%20de%20pessoas&hl=pt-BR&ved=2ahUKEwif46DzisyBAxVmBbkGHejmBf4QMygdegQIARBx",
       name:"Fernado",
       profession:"Prgramador Backend",
       birth:"23/06/1995",
       phone:"(31) 997628732",
       email:"Fernando20c@gmail.com",
    },
    {
        img:"",
       name:"Amanda",
       profession:"Designer grafica",
       birth:"12/02/2001",
       phone:"(11) 9997213621",
       email:"amnaadasantos2001@gmail.com",
    },

];

const image=document.querySelector("img")
const nome=document.querySelector("#nome")
const profissao=document.querySelector("#profissao")
const nascimento=document.querySelector("#nascimento")
const telefone=document.querySelector("#telefone")
const email =document.querySelector("#email")

let choice = 0

function changePerfil(indece) {
    image.src = candidatos[indece].image
    nome.innerText = candidatos[indece].name
    profissao.innerText = candidatos[indece].profession
    nascimento.innerText = candidatos[indece].birth
    email.innerText = candidatos[indece].email
}

function nextPerfil() {
    if (choice ===candidatos.length - 1){
        choice = 0
    }
    else{
        choice++
    }
    changePerfil(choice)

}

function beforePerfil() {
    if (choice === 0 ){
        choice = 2
    } else{
        choice--
    }
    changePerfil(choice)
}