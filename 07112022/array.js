const carros = ["Saab", "Fusca", "Volvo"]

console.log(typeof carros) // o js entende como objeto, mas é um array 
console.log(carros[1])
/*
carros.sort()
carros.find()
carros.forEach()
carros.join()
carros.length
*/
carros.push("Audi");
carros.unshift("Fusca");
carros.splice(1,0,"Audi");
let mais_carros = carros.concat(["Audi","Mercedes"])

carros[2] = "Audi";
Array.isArray(carros)  // verifica se é um array


const idades = [10,20,11,9,8,200,95,44]

console.log(" Idades ordenadas da maior para a menor: " +idades.sort((a,b) => b - a))
console.log(idades.forEach((e) => console.log(e)))


const cadastros = [
    { nome: "bob",idade:89},
    {nome:"mari",idade:45},
    {nome:"teste",idade:33},
    {idade:30}
]

console.log(cadastros)

const pessoa ={
    nome:'Alou',
    idade: 20
}
cadastros.push(pessoa)

console.log(cadastros.map((e) => e.nome))

console.log("Quantidade de cadastros: "+cadastros.length)
console.log("Quantidade de letras do primeiro nome: "+cadastros[0].nome.length)
console.log(cadastros.sort((a,b) => a.idade - b.idade)) // ordena por idade crescente

