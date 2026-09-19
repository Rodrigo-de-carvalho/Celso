const sequencia = [5, 1, 2, 9, 3];
let posicao = 0;
let opcao = 0;

do {
    console.log("MENU: 1 - Cadastrar | 2 - Consultar | 3 - Sair");
    opcao = sequencia[posicao]!;
    posicao++;
    console.log("Opção digitada:", opcao);

    if (opcao === 1) {
        console.log("Cadastrando...");
    } else if (opcao === 2) {
        console.log("Consultando...");
    } else if (opcao === 3) {
        console.log("Saindo do programa.");
    } else {
        console.log("Opção inválida! O menu será exibido novamente.");
    }
} while (opcao !== 3);
