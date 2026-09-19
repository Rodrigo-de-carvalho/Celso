const senhaSimulada = "senha-teste";

function tentarLogin(tentativas: string[]): string {
    let contador = 0;
    let acessoLiberado = false;

    while (contador < 3 && !acessoLiberado) {
        const tentativa = tentativas[contador];
        contador++;

        if (tentativa === senhaSimulada) {
            acessoLiberado = true;
        }
    }

    if (acessoLiberado) {
        return `Acesso liberado na tentativa ${contador}.`;
    }

    return "Conta bloqueada: 3 tentativas esgotadas.";
}

console.log("Teste 1 (acerta na 2ª):", tentarLogin(["1111", "senha-teste"]));
console.log("Teste 2 (acerta na 3ª):", tentarLogin(["1111", "2222", "senha-teste"]));
console.log("Teste 3 (bloqueio):", tentarLogin(["1111", "2222", "3333", "senha-teste"]));
