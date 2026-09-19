function ehBissexto(ano: number): boolean {
    // (divisível por 4 E NÃO por 100) OU divisível por 400.
    // Os parênteses agrupam a regra geral com a exceção dos múltiplos de 100;
    // o || devolve os múltiplos de 400, que voltam a ser bissextos.
    return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

console.log("Ano 1900:", ehBissexto(1900) ? "bissexto" : "não bissexto");
console.log("Ano 2000:", ehBissexto(2000) ? "bissexto" : "não bissexto");
console.log("Ano 2024:", ehBissexto(2024) ? "bissexto" : "não bissexto");
console.log("Ano 2100:", ehBissexto(2100) ? "bissexto" : "não bissexto");
