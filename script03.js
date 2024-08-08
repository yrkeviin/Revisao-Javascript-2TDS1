let idadeMinima = 7;

let idadeAluno = 23;

let turmaCrianca = 13;

let turmaAdolescente = 17;

if (idadeAluno >= idadeMinima) {
    console.log("Matrícula realizada com sucesso!")
} else {
    console.log("Desculpe, você ainda não pode se matricular nessa escola!")
}

if (idadeAluno <= turmaCrianca){
    console.log("Você faz parte da turma Kids!")
} else if (idadeAluno <= turmaAdolescente) {
    console.log("Você faz parte da turma Junior!")
} else {
    console.log ("Você faz parte da turma de Adultos!")
}