// 1 .

// let alunos = ["Ana", "Bruno", "Carla", "Diego", "Elena","thiago"]
// console.log(alunos)

// function fnExibirChamada (alunos){
//     console.log (alunos [0])
//     let ultimoNome = ((alunos.length -1))
//     console.log (alunos [ultimoNome])
    
// }

// // console.log (alunos[0])
// // console.log((alunos.length -1))

// fnExibirChamada (alunos) // essa mensagem precisa estar escrita aq para chamar toda a função/código, pois a função toda se resume em "alunos", sem essa fn o código n roda'





// 2 .

// let perifericos = ["Teclado Mecanico", "Mouse Gamer"]

// console.log (perifericos)

// function fnAdicionarProduto (lista, novoItem){
//     if (lista == "perifericos"){
//         perifericos.push(novoItem)
//     }
//     console.log (perifericos)

// } 

// fnAdicionarProduto("perifericos", "Headset USB")



// 3 . 

// function fnEncaixarPrioridade(Fila, nomePaciente) {
 
//   // push adiciona mais um valor ao final do array
//   Fila.unshift(nomePaciente);
 
//   // Mostra a Fila atualizada no terminal
//   console.log(Fila);
// }
 
// // Criando o array inicial e chamando a função
// let prioridade = ["Marcos", "Juliana", "Roberto"];
 
// fnEncaixarPrioridade(prioridade, "Dona clara");
 

// // 4 . 

// function fnChamarProximo(prioridade) {
//     let primeiroNome = prioridade.shift()
//     console.log(" Foi chamada " + primeiroNome)
//     console.log(" As pessoas que estão aguardando são " + prioridade)
// }

// fnChamarProximo(prioridade)



// 5 . 

// let acoes = ["Escreveu titulo", "Aplicou negrito", "Inseriu tabela"]
// console.log (acoes)

// function fnDesfazerAcao (acoes){
//     acoes.pop ()
//     console.log (acoes)
// }


// fnDesfazerAcao(acoes)



// 6 . 

// let itens = ["Camiseta", "Calça", "Tênis", "Boné"]
// console.log(itens)

// function fnVerificarEstoque (itens){
//     console.log(itens.length)
    
// }



// 8 . 

// let corredores = ["Arroz", "Feijão", "Açúcar", "Café", "Sal"]

// function fnConsultarCorredor(lista, item) {
//     if (lista.includes(item) == true) {
//         let posicaoItem = lista.indexOf(item) + 1
//         console.log (`O ${item} esta no corredor ${posicaoItem}`)
//     } else {
//         console.log (`O produto ${item} não foi encontrado!`)
//     }
// }

// fnConsultarCorredor(corredores, "Macarrão")
// fnConsultarCorredor(corredores, "Café")



// 9 . 

// let basePreco = [15.00, 25.00, 40.00]

// function fnAtualizarPreco(lista, indice, novoValor) {
//     //Length conta o total de valores -> 3
//     if ((lista.length - 1) < indice) {
//         console.log(`Produto não encontrado`)
//         return
//     }
//     lista[indice] = novoValor
//     console.log(`Novos valores de preços ${lista}`)
// }

// fnAtualizarPreco(basePreco, 1, 28.50)
// fnAtualizarPreco(basePreco, 2, 43.49)



// 10 . 

function fnCriarBoletim(nota1, nota2, nota3){ // aq eu crio a função
    let notas =  [nota1, nota2, nota3] // aq eu declaro quais funções serão chamadas 
    console.log(notas) // aq eu exibo elas no terminal
}

fnCriarBoletim(8.0, 7.5, 9.0) // aq eu defino quais são as informações q serão usadas na função, para rodar