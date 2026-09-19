function classificarMedia(n1: number, n2: number, n3: number): string {
    const notas = [n1, n2, n3];

    for (const nota of notas) {
        if (nota < 0 || nota > 10) {
            return "Cálculo inválido: todas as notas devem estar entre 0 e 10.";
        }
    }

    const media = (n1 + n2 + n3) / 3;

    if (media >= 7) {
        return `Média ${media.toFixed(2)}: Aprovado`;
    } else if (media >= 5) {
        return `Média ${media.toFixed(2)}: Recuperação`;
    } else {
        return `Média ${media.toFixed(2)}: Reprovado`;
    }
}

console.log("Notas 7, 7, 7:", classificarMedia(7, 7, 7));
console.log("Notas 6, 7, 7:", classificarMedia(6, 7, 7));
console.log("Notas 5, 5, 5:", classificarMedia(5, 5, 5));
console.log("Notas 4, 5, 5:", classificarMedia(4, 5, 5));
console.log("Notas 10, 10, 10:", classificarMedia(10, 10, 10));
console.log("Notas 0, 0, 0:", classificarMedia(0, 0, 0));
console.log("Notas 11, 5, 5:", classificarMedia(11, 5, 5));
console.log("Notas -1, 8, 8:", classificarMedia(-1, 8, 8));
