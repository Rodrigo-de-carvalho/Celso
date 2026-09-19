function Consumo(consumo: number): string {
    if (consumo < 0) {
        return "Consumo inválido: o valor não pode ser negativo.";
    } else if (consumo <= 100) {
        return "Faixa 1 (Até 100 kWh)";
    } else if (consumo <= 220) {
        return "Faixa 2 (101 a 220 kWh)";
    } else {
        return "Faixa 3 (Acima de 220 kWh)";
    }
}

// EVIDCÊNCIAS DE TESTES (Exigidas pelo comando de ação)
console.log("Teste Consumo 0:", Consumo(0));
console.log("Teste Consumo 100:", Consumo(100));
console.log("Teste Consumo 101:", Consumo(101));
console.log("Teste Consumo 220:", Consumo(220));
console.log("Teste Consumo 221:", Consumo(221));