function manipulaValores(a,b,calculo){
    let resultado=0;
if(calculo==="+"){
    resultado=a+b;
}else if(calculo ==="-"){
resultado = a-b;
}
return resultado;
}

console.log(manipulaValores(1,2,'-'));