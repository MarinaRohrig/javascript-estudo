const arr = [['Lionel','Messi'], 'John', 'Layla', 20];
//let [[nome,sobrenome], value2, value3] = arr;
//let[nome,sobrenome] = value1;

function destructuring(arr){
    let[[nome,sobrenome],value2,value3]=arr;
  return  {nome,sobrenome,value2,value3,value4}
}

module.exports = {destructuring}  // exports ES5
export default destructuring;


console.log(arr.at(0)); // primeiro elemento
console.log(arr.at(-1)); // ultimo elemento

console.log(nome,sobrenome)

//console.log(value1);
//console.log(value2);
//console.log(value3);

