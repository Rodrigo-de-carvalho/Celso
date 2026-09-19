function classificarTriangulo(a: number, b: number, c: number): string {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Não forma triângulo: as medidas devem ser positivas.";
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
        return "Não forma triângulo: viola a desigualdade triangular.";
    }

    if (a === b && b === c) {
        return "Triângulo equilátero";
    } else if (a === b || b === c || a === c) {
        return "Triângulo isósceles";
    } else {
        return "Triângulo escaleno";
    }
}

console.log("Medidas 3, 3, 3:", classificarTriangulo(3, 3, 3));
console.log("Medidas 5, 5, 8:", classificarTriangulo(5, 5, 8));
console.log("Medidas 8, 5, 5:", classificarTriangulo(8, 5, 5));
console.log("Medidas 3, 4, 5:", classificarTriangulo(3, 4, 5));
console.log("Medidas 1, 2, 3:", classificarTriangulo(1, 2, 3));
console.log("Medidas 1, 2, 10:", classificarTriangulo(1, 2, 10));
console.log("Medidas 0, 4, 5:", classificarTriangulo(0, 4, 5));
console.log("Medidas -3, 4, 5:", classificarTriangulo(-3, 4, 5));
