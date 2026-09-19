function gerarTabuada(numero: number): void {
    if (!Number.isInteger(numero) || numero < 1 || numero > 100) {
        console.log(`Valor ${numero} inválido: informe um inteiro entre 1 e 100.`);
        return;
    }

    console.log(`Tabuada do ${numero}:`);
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
    }
}

gerarTabuada(7);
gerarTabuada(101);
gerarTabuada(3.5);
