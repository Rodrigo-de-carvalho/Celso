let pares = 0;
let impares = 0;
let multiplosDe5 = 0;

for (let numero = 1; numero <= 50; numero++) {
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }

    if (numero % 5 === 0) {
        multiplosDe5++;
    }
}

console.log("Pares:", pares);
console.log("Ímpares:", impares);
console.log("Múltiplos de 5:", multiplosDe5);
