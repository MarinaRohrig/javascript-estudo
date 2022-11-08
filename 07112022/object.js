const pessoa = {
    nome:['Mari','da Silva'],
    idade: 40,
    genero: 'feminino',
    interesses: ['jogos','cartas'],
    bio: function(){
        console.log(this.nome[0] +'' +this.nome[1] + 'tem ' +this.idade + 'anos de idade. Ela gosta de'
        +this.interesses+' .');
    },
    saudacao: function(){
        console.log('Oi! Eu sou '+this.nome[0] +'');
    }
};

console.log(eval(idade))


pessoa.idade=33
pessoa.nacionalidade='brasileiro'
pessoa.nome = { 
    nome: pessoa.nome[0],
    sobrenome: pessoa.nome[1]
}
pessoa.despedida = function() { console.log('adeus!')}
