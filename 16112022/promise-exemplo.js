let myPromise = new Promise(
    function(myResolve,myReject){
        myResolve("Função executada")
    }
)

myPromise.then((e) => console.log(e)).catch