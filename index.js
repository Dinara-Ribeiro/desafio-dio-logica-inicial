
function calculoNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel; 

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    console.log("O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}");
}

let jogadores = [
    {vitorias: 30, derrotas: 14}, 
    {vitorias: 9, derrotas: 3},    
    {vitorias: 50, derrotas: 25}, 
    {vitorias: 101, derrotas: 0},  
];

for (let i = 0; i < jogadores.length; i++) {
    let jogador = jogadores[i];
    calculoNivel(jogador.vitorias, jogador.derrotas);
}

