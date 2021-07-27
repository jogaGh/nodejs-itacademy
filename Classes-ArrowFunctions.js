//NIVELL 1, EXERCICI 1
console.log("Imprimir per pantalla el resultat d'una arrow function autoinvocable que sumi dos nombres.")
//-ENUNCIAT part 3: dos nombres.
let addends = [Math.ceil(Math.random()*10**5)/100, Math.ceil(Math.random()*10**5)/100]
//-ENUNCIAT part 2: una arrow function autoinvocable que sumi
let sumaResult = (addends => {
    let configFunction = { addendsQuantityRestriction: true, addendsQuantity: 2 }
    //Comprovant si s'ha habilitat la restricció de sumands a una quantitat exacte d'ells
    if (configFunction.addendsQuantityRestriction) {
        //Comprovant que es rep la quantitat permesa de potencials sumands
        if(addends.length!==configFunction.addendsQuantity) return `S'esperaven exactament ${configFunction.addendsQuantity} sumands, s'han rebut: ${addends.length}`
    }
    //Al final d'aquest arxiu es proposa un bloc que pot sustituir el bloc segúent (*)
    let allAreNumbers = true
    let expression = ''
    let sum = 0
    for (let i = 0; i < addends.length; i++) {
        //Comprovant que els elements són o poden ser convertits a números:
        if(isNaN(addends[i])) {
            allAreNumbers = false
            break
        }
        //Formant la resposta:
        expression += `${addends[i]}`
        if (i < addends.length - 1) {
            expression += ' + '
        }
        sum += parseFloat(addends[i])
    }
    if(!allAreNumbers) return 'Tots els elements han de ser números'
    expression += ' = '
    return expression + sum
})(addends)
//-ENUNCIAT part 1: Imprimir per pantalla el resultat d'
console.log(sumaResult)

/*
    INCIDÈNCIA: Perquè en JS(també en altres llenguatges) les segúents sumes no són exactes? console.log(12.54+40.27654) console.log(701.54+40.27654)
    RESOLUCIÓ: https://es.stackoverflow.com/questions/197/por-qu%C3%A9-mis-programas-no-pueden-hacer-c%C3%A1lculos-aritm%C3%A9ticos-correctamente
*/
//=========================================================================================================================================
//NIVELL 2 - EXERCICI 1
console.log("Crear una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut")
let object = {}
object = ( paramValue => {
    object.atr = paramValue
    return object
})('param value')
console.log(object)

//NIVELL 2 - EXERCICI 2
console.log("Crear una classe Persona que rebi un paràmetre 'nom' a l'ésser creat. La classe inclourà un mètode decirNombre que imprimeixi per consola el paràmetre 'Nom'")
//-ENUNCIAT part 1: Crear una classe Persona que
class Persona {
    //-ENUNCIAT part 2: rebi un paràmetre 'nom' a l'ésser creat
    constructor(nom) {
      this.nom = nom;
    }
    //-ENUNCIAT part 3: La classe inclourà un mètode decirNombre que imprimeixi per consola el paràmetre 'Nom'
    decirNombre() {
        console.log(this.nom)
    }
}
let Luis = new Persona('Luis')
//-ENUNCIAT part 4: Invocar el mètode decirNombre des de fora de la classe.
Luis.decirNombre()
//=========================================================================================================================================
//NIVELL 3 - EXERCICI 1
console.log("Crear una function creadora d'objectes, abstraient la definició de les classes. Invocar-amb diferents definicions.")
function createObjectWithoutEmployClasses(chosenClass, propertyValue= "valor predeterminat de la propietat d'un objecte creat sense classes") {
    let object = { commonAttr: chosenClass }
    switch (chosenClass) {
        case 'a':
            object.specificAttrOfClassA = propertyValue
            return object
        case 'b':
            object.specificAttrOfClassB = propertyValue
            return object
        default:
            break;
    }
}
let objectWithoutEmployClasses = createObjectWithoutEmployClasses('b', 'objecte creat sense emprar classes')
console.log('objecte creat sense emprar classes:', objectWithoutEmployClasses)
objectWithoutEmployClasses = createObjectWithoutEmployClasses('a')
console.log('objecte creat sense emprar classes:', objectWithoutEmployClasses)

class chosenClassClass {
    constructor(chosenClass) {
      this.commonAttr = chosenClass;
    }
}
class classA extends chosenClassClass {
    constructor(chosenClass, otherParam = "propietat amb valor per defecte d'un objecte de classe A") {
        super(chosenClass)
        this.specificAttrOfClassA = otherParam
    }
}
class classB extends chosenClassClass {
    constructor(chosenClass, otherParam = "propietat amb valor per defecte d'un objecte de classe B") {
        super(chosenClass)
        this.specificAttrOfClassB = otherParam
    }
}
function createObjectUsingClasses(chosenClass, propertyValue) {
    switch (chosenClass) {
        case 'a':
            return new classA(chosenClass, propertyValue)
            break;
        case 'b':
            return new classB(chosenClass, propertyValue)
            break;
        default:
            break;
    }
}

let classInstance = createObjectUsingClasses('a')
console.log(classInstance)
classInstance = createObjectUsingClasses('b', 'custom value for property of class B object')
console.log(classInstance)

/*
    Nivell 1, Exercici 1 (*)
    A continuació una proposta per sustituir el bloc de dalt. El motiu per emprar aquest bloc seria que la validació
    dels elements com a números es faria abans de declarar les variables "expression" i "sum", i s'estalviarien
    les seves successives 'actualitzacions' en cas que no tots els elements poguessin sumar-se
*/
/* 
    let allAreNumbers = true
    for (let i = 0; i < addends.length; i++) {
        if(isNaN(addends[i])) {
            allAreNumbers = false
            break
        }
    }
    if(!allAreNumbers) return 'Tots els elements han de ser números'
    //Formant la resposta:
    let expression = ''
    let sum = 0
    for (let i = 0; i < addends.length; i++) {
        expression += `${addends[i]}`
        if (i < addends.length - 1) {
            expression += ' + '
        }
        sum += parseFloat(addends[i])
    }
    expression += ' = '
*/