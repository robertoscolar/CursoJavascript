function greet (name:string, age?:number) {
    console.log(`Hello ${name.toUpperCase()}!`)
    if (age) {
        console.log(`Eu tenho ${age} anos.`)
    }
    console.log('-------------------------------')
}

greet ('Daniel')
greet('Roberto', 21)