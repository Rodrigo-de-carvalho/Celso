interface Estudante {
    matricula: number;
    nome: string;
}

const estudantes: Estudante[] = [
    { matricula: 2024001, nome: "Ana" },
    { matricula: 2024002, nome: "Bruno" },
    { matricula: 2024003, nome: "Carla" },
    { matricula: 2024004, nome: "Diego" },
    { matricula: 2024005, nome: "Elisa" },
];

function buscarMatricula(matricula: number): void {
    let encontrou = false;
    let nome = "";
    let iteracoes = 0;

    for (const estudante of estudantes) {
        iteracoes++;

        if (estudante.matricula === matricula) {
            encontrou = true;
            nome = estudante.nome;
            break;
        }
    }

    if (encontrou) {
        console.log(`Matrícula ${matricula}: ${nome} (${iteracoes} iterações)`);
    } else {
        console.log(`Matrícula ${matricula}: não encontrada (${iteracoes} iterações)`);
    }
}

buscarMatricula(2024002);
buscarMatricula(2024099);
