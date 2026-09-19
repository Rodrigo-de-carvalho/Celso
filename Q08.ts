type Regiao = "N" | "NE" | "CO" | "SE" | "S";

function calcularFrete(regiao: Regiao, total: number): number {
    let frete = 0;

    switch (regiao) {
        case "N": frete = 45; break;
        case "NE": frete = 38; break;
        case "CO": frete = 32; break;
        case "SE": frete = 20; break;
        case "S": frete = 28; break;
    }

    if (total > 500 && (regiao === "NE" || regiao === "SE")) {
        frete = 0;
    }

    return frete;
}

const regioes: Regiao[] = ["N", "NE", "CO", "SE", "S"];
const totais = [300, 500, 500.01, 800];

for (const regiao of regioes) {
    for (const total of totais) {
        console.log("Região", regiao, "| pedido R$", total, "| frete R$", calcularFrete(regiao, total));
    }
}
