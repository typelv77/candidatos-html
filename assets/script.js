const candidatos = [
    {
       img:"./assets/retrato-de-um-empresario-afro-americano-senior-confiante-em-terno-ceo-com-oculos-e-bracos-cruzados_777271-16302.jpg",
       name:"Teago",
       profession:"Engenheiro de Software",
       birth:"07/07/1977",
       phone:"(27) 994263879",
       email:"Teago1227@gmail.com",
    },
    {
        img:"https://img.freepik.com/fotos-premium/a-man-in-a-suit-and-tie_777078-40692.jpg?w=360",
       name:"Fernado",
       profession:"Programador Backend",
       birth:"23/06/1995",
       phone:"(31) 997628732",
       email:"Fernando20@gmail.com",
    },
    {
        img:"./assets/retrato-corporativo-foto-perfil-profissional-foto-linkedin-g98m.webp",
       name:"Amanda",
       profession:"Designer grafica",
       birth:"12/02/2001",
       phone:"(11) 9997213621",
       email:"amnaadasantos2001@gmail.com",
    },
   
];

const image=document.querySelector("img");
const nome=document.querySelector("#nome");
const profissao=document.querySelector("#profissao");
const nascimento=document.querySelector("#nascimento");
const telefone=document.querySelector("#telefone");
const email =document.querySelector("#email");

const modalNewCandidato = document.querySelector('#modal');
const overFlow = document.querySelector('#overflow');

const inputimage = document.querySelector("#input-image");
const inputnome = document.querySelector("#input-nome");
const inputprofissão = document.querySelector("#input-profissão");
const inputnascimento = document.querySelector("#input-nascimento");
const inputtelefone = document.querySelector("#input-telefone");
const inputemail = document.querySelector("#input-email");

let choice = 0;

function changePerfil(indece) {
    image.src = candidatos[indece].img;
    nome.innerText = candidatos[indece].name;
    profissao.innerText = candidatos[indece].profession;
    nascimento.innerText = candidatos[indece].birth;
    email.innerText = candidatos[indece].email;
}

function nextPerfil() {
    if (choice ===candidatos.length - 1){
        choice = 0
    }
    else{
        choice++
    }
    changePerfil(choice)

};

function beforePerfil() {
    if (choice === 0 ){
        choice = 2
    } else{
        choice--
    }
    changePerfil(choice)
};

function closeModal(){
    modalNewCandidato.style.display="none";
    overFlow.style.display = "none";
};

function openModal(){
    modalNewCandidato.style.display ="block";
    overFlow.style.display = "block";
};

function addNewCandidato(){
 const addNewCandidato = {

    img: inputimage.value,
    name: inputnome.value,
    profession:inputprofissão.value,
    birth: inputnascimento.value,
    phone:inputtelefone.value,
    email: inputemail.value
 }

candidatos.push(addNewCandidato); //adiciona um novo objeto ao fim da arry

closeModal()
}