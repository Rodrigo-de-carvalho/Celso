const consumos = [42, 38, 45, 50, 36, 30, 33];

let total = 0;
for (const consumo of consumos) {
    total += consumo;
}

const media = total / consumos.length;

let diasAcimaDaMedia = 0;
for (const consumo of consumos) {
    if (consumo > media) {
        diasAcimaDaMedia++;
    }
}

console.log("Total da semana:", total, "kWh");
console.log("Média diária:", media.toFixed(2), "kWh");
console.log("Dias acima da média:", diasAcimaDaMedia);
