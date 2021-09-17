function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
//NIVELL 1
/*  EXERCICI 1
    Crear una function que retorni una Promise que invoqui la funcion resolve() o bé reject() que rep.
    Invocar-la des de fora passant-li totes dues funcions que imprimeixin un missatge diferent en cada cas.
*/
let myRandomPairFunction = (resolve, reject) => {
    return new Promise((resolve, reject) => {
        let number = Math.ceil(Math.random()*100)
        console.log(`nombre generat: ${number}`)
        let promiseFunction
        if(number%2==0){
            promiseFunction = 'resolve'
            resolve("Èxit! S'ha trobat un número par \n")
        } else{
            promiseFunction = 'reject'
            reject("No s'ha generat un nombre par amb èxit \n")
        }
        console.log(`la promesa retornada per myRandomPairFunction conclourà executant la funció ${promiseFunction} rebuda`)
    })
    .then(resolve)
    .catch(reject)
}

let functionResolve = (successMessage = `Èxit! \n`) => {
    console.log(`SUCCESS ${successMessage}`)
}
let functionReject = (failureMessage = "Error \n") => {
    console.log(`FAILURE ${failureMessage}`)
}

//Invocar-la des de fora passant-li totes dues funcions que imprimeixin un missatge diferent en cada cas.
myRandomPairFunction(functionResolve, functionReject)

/*  EXERCICI 2
    Crear una arrow function que, rebent un paràmetre i una function callback, li passi a la funció un missatge o
    un altre (que s'imprimirà per consola) en funció del paràmetre.
*/
let myArrowFunction = (myParam, cb) => {
    //passant a la funció un missatge o un altre en funció del paràmetre
    let message = `El paràmetre rebut ${myParam} és de tipus ${typeof(myParam)}`
    cb(message)
}

(async () => {
    await sleep()
    myArrowFunction('abc', console.log)
    myArrowFunction(123, console.log)
})()
//NIVELL 2
let employees = [
    {id: 1, name: 'Linux Torvalds'},
    {id: 2, name: 'Bill Gates'},
    {id: 3, name: 'Jeff Bezos'}
]
let salaries = [
    {id: 1, salary: 4000},
    {id: 2, salary: 1000},
    {id: 3, salary: 2000}
]
/*  EXERCICI 1
    Donats els objectes employees i salaries, creu una arrow function getEmpleado que retorni una
    Promise efectuant la cerca en l'objecte pel seu id.
*/
let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        process.stdout.write('\nexecutant getEmpleado, ')
        let employeeInfo = {}
        let employee = employees.find(employee => employee['id']==id)
        if (employee) {
            process.stdout.write(`employee { id: ${employee['id']}, name: '${employee['name']}' }, `)
            functionResolve('at getEmpleado')
            resolve(employee)
        } else {
            reject('at getEmpleado')
        }     
    }) 
} //getEmpleado(3)

/*  EXERCICI 2
    Creu una altra arrow function getSalario que rebi com a paràmetre un objecte employee i retorni
    el seu salari.
*/
let getSalario = (employee) => {
    /*return new Promise((resolve, reject) => {
        console.log('executant getSalario')
        let message = 'at getSalario'
        let salaryObject = salaries.find(salary => salary['id']==employee['id'])
        if (salaryObject) {
            console.log('salary', salaryObject['salary'])
            resolve(message)
        } else {
            reject(message)
        }
    })*/
    process.stdout.write('executant getSalario, ')
    let salaryObject = salaries.find(salary => salary['id'] == employee['id'])
    if (salaryObject) {
        return salaryObject['salary']        
    }
    return null
} 

function displaySalary(employee){
    let salary = getSalario(employee)
    msgSalary(salary)
}
function msgSalary(salary){
    console.log('salari', salary ? salary : 'no trobat')
}

(async () => {
    await sleep(100)
    /*  EXERCICI 3
        Invoqui la primera Promise getEmpleado i posteriorment getSalario, niant l'execució de les
        dues promises.
    */
    getEmpleado(1).then(
        (employee) => {
            let salari = getSalario(employee) //.then(functionResolve).catch(functionReject))
            msgSalary(salari)
        }
    )
    .then(() => {
//NIVELL 3
        /*  EXERCICI 1
            Fixi un element catch a la invocació de la fase anterior que capturi qualsevol error i l'imprimeixi per consola.
        */
        getEmpleado(3)
        .then((employee) => {
            displaySalary(employee)
        })
        .catch(functionReject)

        .then(() => {
            getEmpleado(4)
            .then((employee) => {
                displaySalary(employee)
            })
            .catch(functionReject)
            .then(() => {
                displaySalary({})
            })
        })
    })
})()