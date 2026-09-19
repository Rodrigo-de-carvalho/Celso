const cedulas = [100, 50, 20, 10, 5, 2];

function possivel(valor: number): boolean {
    return valor !== 1 && valor !== 3;
}

function sacar(valor: number): string {
    if (valor <= 0 || !Number.isInteger(valor)) {
        return "Valor inválido: informe um inteiro positivo, sem centavos.";
    }

    if (!possivel(valor)) {
        return "Valor impossível de pagar com as cédulas disponíveis.";
    }

    let restante = valor;
    const partes: string[] = [];

    for (const cedula of cedulas) {
        let quantidade = 0;

        while (restante >= cedula && possivel(restante - cedula)) {
            restante -= cedula;
            quantidade++;
        }

        if (quantidade > 0) {
            partes.push(quantidade + " x R$ " + cedula);
        }
    }

    return partes.join(", ");
}

console.log("Saque de 186:", sacar(186));
console.log("Saque de 13:", sacar(13));
console.log("Saque de 3:", sacar(3));
console.log("Saque de 12.5:", sacar(12.5));
console.log("Saque de -20:", sacar(-20));
