type Turno = "manhã" | "tarde" | "noite";

interface Registro {
    sala: string;
    turno: Turno;
    leituras: number[];
}

interface ResumoSala {
    sala: string;
    turno: Turno;
    total: number;
    media: number;
    validas: number;
    invalidas: number;
    classificacao: string;
}

function leituraValida(leitura: number): boolean {
    return leitura >= 0;
}

function classificarConsumo(media: number): string {
    if (media <= 20) {
        return "Baixo";
    } else if (media <= 40) {
        return "Moderado";
    } else {
        return "Alto";
    }
}

function resumirSala(registro: Registro): ResumoSala {
    let total = 0;
    let validas = 0;
    let invalidas = 0;

    for (const leitura of registro.leituras) {
        if (leituraValida(leitura)) {
            total += leitura;
            validas++;
        } else {
            invalidas++;
        }
    }

    let media = 0;
    let classificacao = "Sem leituras válidas";

    if (validas > 0) {
        media = total / validas;
        classificacao = classificarConsumo(media);
    }

    return { sala: registro.sala, turno: registro.turno, total, media, validas, invalidas, classificacao };
}

console.log("TESTE DAS REGRAS");
console.log("Leitura 0 válida?", leituraValida(0));
console.log("Leitura -1 válida?", leituraValida(-1));
console.log("Média 20:", classificarConsumo(20));
console.log("Média 20.01:", classificarConsumo(20.01));
console.log("Média 40:", classificarConsumo(40));
console.log("Média 40.01:", classificarConsumo(40.01));
console.log("");

const registros: Registro[] = [
    { sala: "Sala 101", turno: "manhã", leituras: [18, 22, 19, 25, 20] },
    { sala: "Sala 102", turno: "tarde", leituras: [35, 41, -3, 38, 44] },
    { sala: "Laboratório", turno: "manhã", leituras: [60, 58, 63, 70, 55] },
    { sala: "Biblioteca", turno: "noite", leituras: [12, 10, 15, 9, 11] },
    { sala: "Sala 201", turno: "noite", leituras: [-1, -5, -2] },
];

console.log("RELATÓRIO DE CONSUMO POR SALA");

let salaMaior = "";
let maiorTotal = 0;

for (const registro of registros) {
    const resumo = resumirSala(registro);

    console.log(
        resumo.sala, "(" + resumo.turno + ")",
        "| total:", resumo.total, "kWh",
        "| média:", resumo.media.toFixed(2), "kWh/dia",
        "| válidas:", resumo.validas,
        "| inválidas:", resumo.invalidas,
        "|", resumo.classificacao,
    );

    if (resumo.total > maiorTotal) {
        maiorTotal = resumo.total;
        salaMaior = resumo.sala;
    }
}

console.log("Sala de maior consumo:", salaMaior, "-", maiorTotal, "kWh");
