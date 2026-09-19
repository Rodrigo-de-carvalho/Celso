function gerarRelatorio(respostas: number[]): void {
    const frequencias: number[] = new Array(11).fill(0);
    let validas = 0;
    let invalidas = 0;
    let soma = 0;

    for (const resposta of respostas) {
        if (resposta < 0 || resposta > 10) {
            invalidas++;
        } else {
            frequencias[resposta] = frequencias[resposta]! + 1;
            soma += resposta;
            validas++;
        }
    }

    console.log("Respostas válidas:", validas, "| inválidas:", invalidas);

    if (validas === 0) {
        console.log("Nenhuma resposta válida, não dá para calcular a média.");
        return;
    }

    console.log("Média das respostas válidas:", (soma / validas).toFixed(2));

    frequencias.forEach((quantidade, nota) => {
        console.log(`Nota ${nota}: ${quantidade}`);
    });
}

console.log("PESQUISA 1");
gerarRelatorio([10, 8, 7, 11, -1, 9, 8, 10, 5, 8, 15, 0]);

console.log("PESQUISA 2");
gerarRelatorio([11, -3, 12]);
