const leituras = [22, -5, 24, 999, 25];
const validas: number[] = [];
let soma = 0;

for (const leitura of leituras) {
    if (leitura === 999) {
        break;
    }

    if (leitura < 0) {
        continue;
    }

    validas.push(leitura);
    soma += leitura;
}

console.log("Leituras válidas:", validas);
console.log("Média:", soma / validas.length);
