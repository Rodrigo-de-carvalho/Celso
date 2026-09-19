type Cor = "vermelho" | "amarelo" | "verde";

function decidir(cor: Cor, temPedestre: boolean, sensorOk: boolean): string {
    if (!sensorOk) {
        return "Modo de segurança: sensor inconsistente.";
    }

    switch (cor) {
        case "vermelho":
            if (temPedestre) {
                return "Veículos param. Pedestres podem atravessar.";
            }
            return "Veículos param.";
        case "amarelo":
            if (temPedestre) {
                return "Preparar parada: há pedestres aguardando.";
            }
            return "Preparar parada.";
        case "verde":
            if (temPedestre) {
                return "Veículos passam. Pedestres aguardam.";
            }
            return "Veículos passam. Nenhum pedestre aguardando.";
    }
}

console.log("Vermelho, com pedestre:", decidir("vermelho", true, true));
console.log("Vermelho, sem pedestre:", decidir("vermelho", false, true));
console.log("Amarelo, com pedestre:", decidir("amarelo", true, true));
console.log("Amarelo, sem pedestre:", decidir("amarelo", false, true));
console.log("Verde, com pedestre:", decidir("verde", true, true));
console.log("Verde, sem pedestre:", decidir("verde", false, true));
console.log("Verde, sensor inconsistente:", decidir("verde", true, false));
console.log("Vermelho, sensor inconsistente:", decidir("vermelho", false, false));
