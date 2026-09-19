function procurarSequencia(codigos: number[]): string {
    for (let i = 0; i + 2 < codigos.length; i++) {
        if (codigos[i] === codigos[i + 1] && codigos[i + 1] === codigos[i + 2]) {
            return `Sequência do código ${codigos[i]} encontrada a partir do índice ${i}.`;
        }
    }

    return "Nenhuma sequência de três códigos iguais encontrada.";
}

console.log("Teste 1:", procurarSequencia([4, 7, 7, 3, 3, 3, 8, 8, 8]));
console.log("Teste 2:", procurarSequencia([5, 9, 9, 9]));
console.log("Teste 3:", procurarSequencia([1, 1, 2, 2, 1, 1, 3]));
console.log("Teste 4:", procurarSequencia([6, 6]));
