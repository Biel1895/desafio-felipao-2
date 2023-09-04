let saldoVitorias = soma(118, 27)
let nivel = " "

function soma(vitorias, derrotas) {
    return vitorias - derrotas
}

let resultadoSoma = saldoVitorias

if (resultadoSoma <= 10) {
    nivel = "Ferro"
}
else if (resultadoSoma > 10 && resultadoSoma <= 20) {
    nivel = "Bronze"
}
else if (resultadoSoma > 20 && resultadoSoma <= 50) {
    nivel = "Prata"
}
else if (resultadoSoma > 50 && resultadoSoma <= 80) {
    nivel = "Ouro"
}
else if (resultadoSoma > 80 && resultadoSoma <= 90) {
    nivel = "Diamante"
}
else if (resultadoSoma > 90 && resultadoSoma <= 100) {
    nivel = "Lendário"
}
else if (resultadoSoma > 100) {
    nivel = "Imortal"
}
console.log("O Herói tem saldo de " + saldoVitorias + " vitórias" + " e está no nível " + nivel)