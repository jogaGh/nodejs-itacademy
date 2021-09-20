//NIVELL 1
let employees = [
    {id: 1, name: 'Linux Torvalds'},
    {id: 2, name: 'Bill Gates'},
    {id: 3, name: 'Jeff Bezos'},
    {id: 4, name: 'Jack Ma'}
]
let salaries = [
    {id: 1, salary: 4000},
    {id: 2, salary: 1000},
    {id: 3, salary: 2000}
]
/*  EXERCICI 1
    Donats els objectes Employees i Salaries, creu una arrow function getEmpleado que retorni una
    Promise efectuant la cerca en l'objecte pel seu id. Creu una altra arrow function getSalario que
    rebi com a paràmetre un objecte Employee i retorni el seu salari.
*/
let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let employeeInfo = {}
        let employee = employees.find(employee => employee['id']==id)
        resolve(employee)
    })
}
let getSalario = (employee) => {
    let salaryObject = salaries.find(salary => salary['id'] == employee['id'])
    if (salaryObject) {
        return salaryObject['salary']
    }
    return null
}

// EXERCICI 2
/*  Creu una funció asíncrona que, rebent un id d'empleat, imprimeixi per pantalla el nom de
    l'empleat i el seu salari
*/
async function display_employee(id) {
    console.log(`id: ${id}`)
    let employee = await getEmpleado(id)
    if (employee) {
        process.stdout.write(`nom: ${employee['name']}, `)
        let salary = getSalario(employee)
        if (salary) {
            console.log(`salari: ${salary}`)
        } else {
            console.log('salari no trobat')
        }
    } else {
        console.log('empleat no trobat')
    }
    console.log()
}

async function executing_display_eployee(...ids){
    for (var i = 0; i < ids.length; i++) {
        await display_employee(ids[i])
    }
}
executing_display_eployee(3,4,6)

//NIVELL 2
/*  EXERCICI 1
    Creu una funció asíncrona que anomeni a una altra que retorni una Promise que efectuï la seva
    resolve amb una demora de 2 segons.
*/
function return_promise_timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //NIVELL 3
            /*  EXERCICI 1
                Capturi tots els errors possibles del Nivell 2.
            */
            try{
                resolve('solved')
            } catch(e){
                reject(e)
            }
        }, ms)
    })
}

async function async_timeout(ms = 2000) {
    try{
        let promiseResult = await return_promise_timeout(ms)
        console.log('promise result:', promiseResult)
    } catch(e){
        console.log(e)
    }
}

async_timeout()