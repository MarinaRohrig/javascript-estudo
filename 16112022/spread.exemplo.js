// usa o map para mostrar o valor do objeto ao invés do nome da chave e o valor
const garagem1 =[
    {nome: 'carro1'},{nome: 'carro2'},{nome: 'carro3'}
].map((e)=> e.nome);

const garagem2 = [
    {nome:'Carro6'},{nome:'carro5'},{nome:'carro6'}
]

console.log(...garagem1,...garagem2)