function gerarFibonacci(n: number): string {
    if (n < 2 || n > 30) {
        return "n inválido: informe um valor de 2 a 30.";
    }

    let anterior = 0;
    let atual = 1;
    let resultado = "0 1";

    for (let i = 3; i <= n; i++) {
        const proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
        resultado = resultado + " " + atual;
    }

    return resultado;
}

console.log("n = 2:", gerarFibonacci(2));
console.log("n = 8:", gerarFibonacci(8));
console.log("n = 30:", gerarFibonacci(30));
console.log("n = 1:", gerarFibonacci(1));
console.log("n = 31:", gerarFibonacci(31));
