function calcularFatorial(n: number): string {
    if (!Number.isInteger(n)) {
        return `Erro: ${n} não é um número inteiro.`;
    }

    if (n < 0) {
        return `Erro: não existe fatorial de número negativo (${n}).`;
    }

    if (n > 15) {
        return `Erro: ${n} está acima do limite de 15.`;
    }

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }

    return `${n}! = ${resultado}`;
}

console.log(calcularFatorial(0));
console.log(calcularFatorial(5));
console.log(calcularFatorial(15));
console.log(calcularFatorial(-3));
console.log(calcularFatorial(2.5));
console.log(calcularFatorial(16));
