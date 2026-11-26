


function fnEncaixarPrioridade(Fila, nomePaciente) {
 
  // push adiciona mais um valor ao final do array
  Fila.unshift(nomePaciente);
 
  // Mostra a Fila atualizada no terminal
  console.log(Fila);
}
 
// Criando o array inicial e chamando a função
let prioridade = ["Marcos", "Juliana", "Roberto"];
 
fnEncaixarPrioridade(prioridade, "Dona clara");
 