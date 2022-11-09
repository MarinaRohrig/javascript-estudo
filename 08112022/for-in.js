// For in só funciona para objetos 

const dieta = { 
    "café da manhã": 'ovos',
    almoco: 'salada',
    jantar: 'pizza'
};
for(const refeicao in dieta){
    console.log(`Para o ${refeicao}, eu comi ${dieta[refeicao]}.`);
};

