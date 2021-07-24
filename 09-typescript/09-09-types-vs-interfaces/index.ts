type Sex = 'male' | 'female'

interface Animal {
    sex: Sex
    hungry: boolean
}

interface Mammal extends Animal {
    weaned: boolean
}

//tipos não podem extender
type Person = Mammal & {
    name: string
}

const animal: Mammal = {
    hungry : true,
    weaned : true,
    sex: 'female'
}