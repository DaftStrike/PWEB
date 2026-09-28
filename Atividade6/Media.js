alert("Média de alunos");
let nome;
let nota1;
let nota2;
let nota3;
let nota4;
let media;

nome = prompt("Qual o nome do aluno?");
alert("O nome do aluno é " + nome);

nota1 = parseFloat(prompt("Digite o valor da 1a nota:"));
nota2 = parseFloat(prompt("Digite o valor da 2a nota:"));
nota3 = parseFloat(prompt("Digite o valor da 3a nota:"));
nota4 = parseFloat(prompt("Digite o valor da 4a nota:"));

media = (nota1 + nota2 + nota3 + nota4)/4;
alert("A média final do aluno " + nome + " é " + media.toFixed(2));