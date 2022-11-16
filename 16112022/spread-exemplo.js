const usuario = {
    nome: 'Marina',
    idade: 24,
    endereco: "Blahblah"
}

const livrosLidos = {
    listaLivros: ["Harry Potter","Blahblah3"]
}

const hobbiesUsuario = {
    hobbies: ['Academia','Jogar']
}

// Formas de integrar dois objetos: 
// Via assign, informando o objeto alvo com {}, e os objetos que vão ser unidos. 
const usuarioCompleto = Object.assign({}, usuario, hobbiesUsuario, livrosLidos)
console.log(usuarioCompleto)

// Via spread operator 
console.log({...usuario,...hobbiesUsuario,...livrosLidos})