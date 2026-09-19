const notas: number[][] = [
    [7, 8, 6, 9],
    [5, 6, 7, 4],
    [9, 9, 10, 8],
];

let maiorNota = 0;
let numeroTurma = 1;

for (const turma of notas) {
    let soma = 0;

    for (const nota of turma) {
        soma += nota;

        if (nota > maiorNota) {
            maiorNota = nota;
        }
    }

    console.log("Turma", numeroTurma, "- média:", (soma / turma.length).toFixed(2));
    numeroTurma++;
}

console.log("Maior nota geral:", maiorNota);
