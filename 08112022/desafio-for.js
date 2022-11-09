// Escreva um programa que, dado um valor n, seja n>1 ,
// imprima na tela um quadrado feito de asteriscos com lado de tamanho n 

let n=2;
let string='';

if (n<1){
    console.log("Número inválido!");
}else {
    for (let row = 0; row<n; row++){
        for (let column = 0; column<n; column++){
            string+="*";
        }
        console.log(string)
        string='';
    }
}

