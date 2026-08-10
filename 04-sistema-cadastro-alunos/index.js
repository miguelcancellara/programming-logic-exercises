import { type } from "node:os"
import { stringify } from "node:querystring"
import readline from "node:readline/promises"

const studentsList = []
const studentsAverage = []
let menuOn = true
let counterId = 0

let rl = readline.createInterface({
    input: process.stdin, //data entry
    output: process.stdout //data output
})

async function start() { //function start software

    console.log("BEM VINDO AO SISTEMA DE CADASTRO DE ALUNOS \n")
    while (menuOn) {
        const responseNumber = await rl.question("0. Cadastrar aluno\n1. Listar alunos\n2. Buscar aluno pelo nome\n3. Remover aluno\n4. Calcular média da turma\n5. Sair \n\nDigite a opção desejada: ")

        if (Number(responseNumber) === 0) {
            studentRegistration()
            counterId++
        } else if (Number(responseNumber) === 1){
            studentsLists()
        }
        else if (Number(responseNumber) === 5) {
            exit()
            break;
        }
    }

    rl.close()
}



async function studentRegistration() { //function number 0
    console.clear();
    console.log("CADASTRO DE ALUNOS \n")

    const studentName = await rl.question("Digite o nome completo do aluno: ")
    const studentAge = await rl.question("Digite a idade do aluno: ")
    const studentNotes = await rl.question("Digite as notas do aluno (ex: 10, 7, 4): ")

    let addStudent = {
        Id: counterId,
        Name: studentName,
        Age: studentAge,
        Notes: [studentNotes]
    }

    studentsList.push(addStudent)
    console.clear()
    console.log("ALUNO CADASTRADO COM SUCESSO! \n")
    
    return start()
}

async function studentsLists() { // function number 1
    if (studentsList.length > 0) {
        console.log("NENHUM ALUNO CADASTRADO!")
    } else {
        console.log(`LISTA DE ALUNOS: ${studentsList}`)
    }
}

async function searchStudentName() { //function number 2

}

async function studentRemove() { //function number 3

}

async function calculateClassAverage() { //function number 4

}

async function exit() { //function number 5
    menuOn = false
    console.log("ATÉ MAIS!")
}

start()