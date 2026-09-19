const filas = ["A", "B", "C", "D", "E"];
const reservados = ["A2", "B5", "C1", "C2", "E6"];

for (const fila of filas) {
    let linha = "";

    for (let assento = 1; assento <= 6; assento++) {
        const codigo = fila + assento;

        if (reservados.includes(codigo)) {
            linha = linha + codigo + "(R) ";
        } else {
            linha = linha + codigo + "    ";
        }
    }

    console.log(linha);
}

console.log("(R) = reservado");
