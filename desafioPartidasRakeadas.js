
 function partidas(vitorias,derrotas){
  let resultado = vitorias - derrotas
  return resultado
 }

 function rankeado() {
  let resultadoRankeado = partidas(70, 30)
  let nivel = ""
  if (resultadoRankeado <= 10) {
    nivel = "Ferro"
  } else if (resultadoRankeado <= 20) {
    nivel = "Bronze"
  } else if (resultadoRankeado <= 50) {
    nivel = "Prata"

  } else if (resultadoRankeado <= 80) {
    nivel = "Ouro"
  } else if (resultadoRankeado <= 90) {
    nivel = "Diamante"
  } else if (resultadoRankeado <= 100) {
    nivel = "Lendário"
  } else if (resultadoRankeado >= 100) {
    nivel = "Imortal"
  }
  return `O Herói tem de saldo de ${resultadoRankeado} e está no nível de ${nivel}`
}


console.log(rankeado())