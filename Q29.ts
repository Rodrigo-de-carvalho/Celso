function arredondar(valor: number): number {
    return Math.round(valor * 100) / 100;
}

function simularPagamento(divida: number, pagamento: number): void {
    console.log("Dívida de R$", divida, "| pagamento mensal de R$", pagamento);

    if (pagamento <= divida / 100) {
        console.log("Pagamento insuficiente: não cobre nem os juros do primeiro mês.");
        return;
    }

    let saldo = divida;
    let meses = 0;

    while (saldo > 0 && meses < 120) {
        const juros = arredondar(saldo * 0.01);
        const saldoComJuros = arredondar(saldo + juros);
        const pago = Math.min(pagamento, saldoComJuros);

        saldo = arredondar(saldoComJuros - pago);
        meses++;

        if (meses <= 3) {
            console.log("Mês", meses, "| juros: R$", juros.toFixed(2), "| pago: R$", pago.toFixed(2), "| saldo: R$", saldo.toFixed(2));
        }
    }

    if (saldo > 0) {
        console.log("Limite de 120 meses atingido. Saldo restante: R$", saldo.toFixed(2));
    } else {
        console.log("Dívida quitada em", meses, "meses.");
    }
}

simularPagamento(1000, 300);
console.log("");
simularPagamento(10000, 101);
console.log("");
simularPagamento(10000, 100);
