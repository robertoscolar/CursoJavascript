//async não vai precisar dos parâmetros reject e resolve, uma vez que já são
//aplicados automaticamente
async function handleClick () {
    throw 'Erro ao executar'
    return 'batata'
}

//javascript util. criada por mim 
//algo que não vem por padrão no javascript
//auxiliará no funcionamento da função async abaixo
function sleep(ms) {
    return new Promise(
        resolve => { setTimeout (() => resolve(true), ms)}
    )
}

//esse código não retornaria batata sem o código acima
//o motivo disso é que estamos lidando com uma promise
//os dois códigos abaixo rodariam juntos e por isso atrapalharia o resultado final
//      await pode ser usada em qualquer função onde tenha async
//      ele obriga que "sleep" espere antes de continuar executando o código abaixo
async function handleClick3() {
    await sleep(5000) 
    return 'batata'
}



//o outro método visto anteriormente:
function handleclick2 () {
    return new Promise ((resolve, reject) => {
        return ('batata')
    })
}