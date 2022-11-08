// exemplo de leitura externa 


const readline = require("readline").createInterface({
    input: ProcessingInstruction.stdin,
    outpu:ProcessingInstruction.stdout,
});

readline.question("Quantidade de mensagens a serem enviadas \n",async(qtd)=>{
    console.log("A quantidade digitada foi: "+qtd)
});