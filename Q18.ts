interface Produto {
    nome: string;
    quantidade: number;
}

const estoque: Produto[] = [
    { nome: "Caneta", quantidade: 0 },
    { nome: "Caderno", quantidade: 3 },
    { nome: "Lápis", quantidade: 5 },
    { nome: "Borracha", quantidade: 0 },
    { nome: "Régua", quantidade: 12 },
];

let zerados = 0;
let baixos = 0;
let regulares = 0;

for (const produto of estoque) {
    if (produto.quantidade === 0) {
        console.log(produto.nome, "- zerado");
        zerados++;
    } else if (produto.quantidade < 5) {
        console.log(produto.nome, "- abaixo de 5 unidades");
        baixos++;
    } else {
        console.log(produto.nome, "- regular");
        regulares++;
    }
}

console.log("Zerados:", zerados);
console.log("Abaixo de 5 unidades:", baixos);
console.log("Regulares:", regulares);
