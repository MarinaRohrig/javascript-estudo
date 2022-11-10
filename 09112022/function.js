function somarValores(parametro1,parametro2,parametro3) {
 //lógica que vai ser repetida
};

const arrayUsuarios=[];
function criaNovoUsuario(nome,idade,genero){
    const usuario ={
    nomeUsuario: nome,
    idadeUsuario: idade,
    generoUsuario: genero
}
console.log(nome,idade,genero)
arrayUsuarios.push(usuario)
console.table(arrayUsuarios)
}


criaNovoUsuario('Marina',25,"F");
criaNovoUsuario('Mari',23,'F')
//Funções são usadas em locais onde uma tarefa é realizada diversas vezes durante a aplicação
//Atividades repetitivas


