function classificar(temperatura: number): string {

    if (temperatura < -20 || temperatura > 100) {
        return "Leitura inválida";
    } else if (temperatura >= 40) {
        return "Crítico";
    } else if (temperatura >= 30) {
        return "Atenção";
    } else {
        return "Normal";
    }
}

console.log("Temperatura -21:", classificar(-21));
console.log("Temperatura -20:", classificar(-20));
console.log("Temperatura 29:", classificar(29));
console.log("Temperatura 30:", classificar(30));
console.log("Temperatura 39:", classificar(39));
console.log("Temperatura 40:", classificar(40));
console.log("Temperatura 100:", classificar(100));
console.log("Temperatura 101:", classificar(101));