// Sem usar switch/case validar se o dado é um animal lagarto, cachorro, gato, cobra, 
//papagaio e o retorno deve ser " Eu sou dono de um x" e caso não seja um animal da lista deve retornar 
// "Eu não tenho um animal de estimação"

const pet = "cobra";

const pets = ['lagarto','cão','gato','cobra'];

console.log("Lista de pets: "+pets);

if (pets.includes(pet)) {
    console.log("Eu sou dono de um "+pet+".");
}else{
    console.log("Não tenho um animal de estimação ou meu animal não está na lista.")
}
