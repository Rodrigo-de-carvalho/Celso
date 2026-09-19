interface Residencia {
    numero: number;
    antes: number;
    depois: number;
}

const residencias: Residencia[] = [
    { numero: 1, antes: 200, depois: 170 },
    { numero: 2, antes: 150, depois: 140 },
    { numero: 3, antes: 300, depois: 270 },
    { numero: 4, antes: 120, depois: 130 },
    { numero: 5, antes: 0, depois: 50 },
    { numero: 6, antes: 250, depois: 200 },
    { numero: 7, antes: 180, depois: 165 },
    { numero: 8, antes: 90, depois: 80 },
    { numero: 9, antes: 400, depois: 360 },
    { numero: 10, antes: 0, depois: 0 },
    { numero: 11, antes: 100, depois: 100 },
    { numero: 12, antes: 500, depois: 420 },
];

let atingiramMeta = 0;

for (const residencia of residencias) {
    if (residencia.antes === 0) {
        console.log(`Residência ${residencia.numero}: não dá para calcular (consumo anterior igual a zero)`);
        continue;
    }

    const reducao = ((residencia.antes - residencia.depois) / residencia.antes) * 100;

    if (reducao >= 10) {
        atingiramMeta++;
        console.log(`Residência ${residencia.numero}: redução de ${reducao.toFixed(1)}% - meta atingida`);
    } else {
        console.log(`Residência ${residencia.numero}: redução de ${reducao.toFixed(1)}% - meta não atingida`);
    }
}

console.log("Residências que atingiram a meta:", atingiramMeta, "de", residencias.length);
