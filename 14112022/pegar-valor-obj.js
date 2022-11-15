const dieta = {
    "café da manhã": 'ovos',
    almoço: 'salada',
    jantar: 'pizza'
};

let array=[];

for (const key in dieta){
    array.push(dieta[key])
}
console.log(array)