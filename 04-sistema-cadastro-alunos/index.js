import { stringify } from "node:querystring"
import readline from "node:readline/promises"

const studentsList = [] 
const studentsAverage = [] 
let menuOn = true

let rl = readline.createInterface({
    input: process.stdin, //entrada de dados
    output: process.stdout //saída de dados
})

async function start() { //function start software

    while (menuOn) {
        console.log("BEM VINDO AO SISTEMA DE CADASTRO DE ALUNOS \n")
        const responseNumber = await rl.question("0. Cadastrar aluno\n1. Listar alunos\n2. Buscar aluno pelo nome\n3. Remover aluno\n4. Calcular média da turma\n5. Sair \n\nDigite a opção desejada: ")
    }

    rl.close()
}

async function studentRegistration() { //function number 0
}

async function studentsLists() { // function number 1
    
}

async function searchStudentName() { //function number 2
    
}

async function studentRemove() { //function number 3
    
}

async function calculateClassAverage() { //function number 4
    
}

async function exit() { //function number 5
}


await start()