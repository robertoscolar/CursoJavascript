//promise em javascript diz respeito á códigos assíncronos
//uma promise têm 3 estados: 
//1-pendente (pending)
//2-resolvida (resolve)
//3-rejeitada (reject)

const batata = new Promise((resolve,reject) => {
  setTimeout(() => {
    //quem vai prevalecer é o primeiro que foi declarado
    resolve('😊')
    reject('🛑')
  },5000)
});