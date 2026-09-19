function verificarPrimo(numero: number): string {
    if (numero <= 1) {
        return `${numero}: inválido (precisa ser maior que 1)`;
    }

    const limite = Math.sqrt(numero);

    for (let divisor = 2; divisor <= limite; divisor++) {
        if (numero % divisor === 0) {
            return `${numero}: composto (divisível por ${divisor})`;
        }
    }

    return `${numero}: primo`;
}

console.log(verificarPrimo(2));
console.log(verificarPrimo(3));
console.log(verificarPrimo(17));
console.log(verificarPrimo(97));
console.log(verificarPrimo(4));
console.log(verificarPrimo(9));
console.log(verificarPrimo(25));
console.log(verificarPrimo(91));
console.log(verificarPrimo(1));
