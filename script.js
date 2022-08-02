// //////////////////////// OBJETO //////////////////////
// const estudante = {
//     nome: 'Bruno',
//     sobrenome: 'Ferreira',
//     matricula: 403867,
//     notasSemestre: [10, 8, 7]
// }

// console.log('Objeto Estudante:', estudante);

// // ADICIONANDO PROPRIEDADES AOS OBJETO ESTUDANTE

// estudante.modulo = 'HTML, CSS & JavaScript';

// console.log('Objeto Modificado:', estudante);

// // Imprimindo informações do objeto estudante

// console.log('Nome da pessoa estudante:', estudante.nome);

// console.log('Segunda nota do Semestre:', estudante.notasSemestre[1]);

// console.log('Módulo Atual:', estudante.modulo);

// // Cópia do objeto estudante

// const copiaEstudante = {
//     ...estudante
// }

// // Alterando o nome do copiaEstudante

// copiaEstudante.nome = 'Astrodev';
// console.log('Nome do copiaEstudante alterado:', copiaEstudante);

// // Adicionando nota 9 no copiaEstudante

// // copiaEstudante.notasSemestre.push(9);
// copiaEstudante.notasSemestre = [...
//     copiaEstudante.notasSemestre, 9]
// console.log('Nota 9 adicionada a copiaEstudante:', copiaEstudante);

// // Alterando  o modulo de copiaEstudante
// copiaEstudante.modulo = 'Flexbox & Grid';
// console.log('Alterando modulo do copiaEstudante:', copiaEstudante);

// // Criação do Array de Estudantes
// const estudantesLabenu = [];
// estudantesLabenu.push(estudante);
// estudantesLabenu.push(copiaEstudante);

// console.log('Array de Estudantes da Labenu', estudantesLabenu);
// //falta finalizar
// //falta finalizar

const carrinho = {
    nome: 'Bruno',
    pagamento: 'Cartão de Crédito',
    endereço: 'Maceió-AL'
}
console.log('Passo 1', carrinho);

carrinho.compras = [];

console.log('Passo 2', carrinho);

carrinho.compras.push({ produto: 'Notebook', preco: 3000, quantidade: 1 })
carrinho.compras.push({ produto: 'SmartTV 50"', preco: 2500, quantidade: 1 })
carrinho.compras.push({ produto: 'Smartphone 128GB', preco: 1900, quantidade: 2 })
carrinho.compras.push({ produto: 'Teclado sem fio', preco: 400, quantidade: 1 })
carrinho.compras.push({ produto: 'Mouse sem fio', preco: 120, quantidade: 1 })

console.log('Passo 3', carrinho);

console.log('Passo 4', carrinho.compras.length);

const carrinhoPresente = {
    ...carrinho
}

carrinhoPresente.nome = 'Wanessa';
carrinhoPresente.pagamento = 'Cartão Presente';

console.log('Passo 5', carrinhoPresente);

