
// passando objeto nos parametros 
function criaNovoUsuario(parametros){
console.log(parametros);
}

criaNovoUsuario({nome:'Marina',genero:'F',idade: 25});



// passando function dentro dos parametros
function novoUsuario(idade,funcao){
    somarIdadeMaisDois(idade)
}

function somarIdadeMaisDois(idade){
    console.log(idade+2)
}

novoUsuario(25,somarIdadeMaisDois)