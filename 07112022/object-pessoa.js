function acessarPerfil(param,param2){
const pessoa = {
    nome: {primeiroNome: 'Mari', sobrenome: 'Rohrig'},
    idade: 25,
    feliz: true,
    pets: ["luke","spock"],
    carros:{
        camaro:{
            placa:"1235123",
            cor: "verde"
        },
        fusca: {
            placa: "535664",
            cor: "amarelo"
        }
    },
    andar: function(km){
        console.log(pessoa.nome.primeiroNome+" andou "+km+" km")
    },
    bio:function(){
        console.log(this.nome.primeiroNome+' tem ' +this.idade+ " anos de idade.")
    }
};
console.log(pessoa['bio']())
console.log(Object.entries(pessoa))
console.log(Object.keys(pessoa))
}

acessarPerfil()



/* antes do function: 
pessoa.andar(20)
console.log(pessoa.nome.primeiroNome)
console.log(pessoa.carros.fusca.cor)
console.log(pessoa["Primeiro Nome"])  // aqui só funcona se eu criar um elemento chamado 
//"Primeiro Nome" : 

*/
