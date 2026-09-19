interface Familia {
    rendaPorPessoa: number;
    cadastroAtivo: boolean;
    temIdoso: boolean;
}

function verificar(familia: Familia): string {
    if (!familia.cadastroAtivo) {
        return "Não elegível: cadastro inativo.";
    }

    if (familia.rendaPorPessoa > 706) {
        return "Não elegível: renda por pessoa acima de R$ 706,00.";
    }

    if (familia.temIdoso) {
        return "Elegível com prioridade (possui pessoa idosa).";
    }

    return "Elegível.";
}

// EVIDÊNCIAS DE TESTES
const cenario1: Familia = { rendaPorPessoa: 500, cadastroAtivo: true, temIdoso: true };
const cenario2: Familia = { rendaPorPessoa: 600, cadastroAtivo: true, temIdoso: false };
const cenario3: Familia = { rendaPorPessoa: 706, cadastroAtivo: true, temIdoso: false };
const cenario4: Familia = { rendaPorPessoa: 800, cadastroAtivo: true, temIdoso: true };
const cenario5: Familia = { rendaPorPessoa: 400, cadastroAtivo: false, temIdoso: true };

console.log("Cenário 1:", verificar(cenario1));
console.log("Cenário 2:", verificar(cenario2));
console.log("Cenário 3:", verificar(cenario3));
console.log("Cenário 4:", verificar(cenario4));
console.log("Cenário 5:", verificar(cenario5));