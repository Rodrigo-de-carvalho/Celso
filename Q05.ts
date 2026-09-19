function calcularDesconto(valor: number, institucional: boolean): number {
    let desconto = 0;

    if (valor > 600) {
        desconto = 15;
    } else if (valor > 300) {
        desconto = 10;
    } else if (valor > 100) {
        desconto = 5;
    }

    if (institucional) {
        desconto = desconto + 3;
    }

    if (desconto > 18) {
        desconto = 18;
    }

    return desconto;
}

function calcularValorFinal(valor: number, institucional: boolean): number {
    const desconto = calcularDesconto(valor, institucional);
    return valor - (valor * desconto) / 100;
}

function testar(valor: number, institucional: boolean): void {
    const desconto = calcularDesconto(valor, institucional);
    const final = calcularValorFinal(valor, institucional);
    console.log("Compra de R$", valor, "| institucional:", institucional, "| desconto:", desconto + "%", "| valor final: R$", final.toFixed(2));
}

testar(100, false);
testar(100.01, false);
testar(300, false);
testar(300.01, false);
testar(600, false);
testar(600.01, false);
testar(50, true);
testar(200, true);
testar(700, true);
