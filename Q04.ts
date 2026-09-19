type Perfil = "aluno" | "professor" | "coordenador";

function acessarArea(perfil: Perfil): string {
    switch (perfil) {
        case "aluno":
            return "Acesso liberado: área do aluno (notas e materiais).";
        case "professor":
            return "Acesso liberado: área do professor (diário de classe).";
        case "coordenador":
            return "Acesso liberado: área do coordenador (gestão dos cursos).";
        default:
            return "Perfil desconhecido: acesso negado.";
    }
}

const entradaInvalida: string = "visitante";

console.log("Execução 1 (aluno):", acessarArea("aluno"));
console.log("Execução 2 (professor):", acessarArea("professor"));
console.log("Execução 3 (coordenador):", acessarArea("coordenador"));
console.log("Execução 4 (entrada inválida):", acessarArea(entradaInvalida as Perfil));
