function exerc1(){
    alert("Exercício 1");

    let numero = [3];
    let maior;

    for(let i = 0; i < 3; i++){
        numero[i] = Number(prompt("Insira o " + (i+1) + "o valor:"));

        if(numero[i] > maior || i == 0){
            maior = numero[i];
        }
    }
    alert("O maior número é " + maior);
};
exerc1();

function exerc2(){
    alert("Exercício 2");

    let ordem = [3];

    for(let i = 0; i < 3; i++){
        ordem[i] = Number(prompt("Insira o " + (i+1) + "o número:"));
    }

    ordem.sort((a, b) => a - b);
    alert("Números ordenados: " + ordem);
};
exerc2();

function exerc3(){
    alert("Exercício 3");

    let palavra = prompt("Escreva uma palavra:");
    let reverso = palavra.toLowerCase().split("").reverse().join("");

    if (palavra === reverso){
        alert("A palavra é um palíndromo!");
    }
    else{
        alert("A palavra não é um palíndromo...");
    }
};
exerc3();

function exerc4(){
    alert("Exercício 4");

    let palavra1 = prompt("Insira a 1a palavra:");
    let palavra2 = prompt("Insira a 2a palavra:");

    if(palavra1 == "" || palavra1 == undefined || palavra2 == "" || palavra2 == undefined){
        alert("Erro!");
    }
    else{
        if(palavra1.includes(palavra2)){
            alert("A segunda palavra é um subconjunto de da primeira!");
        }
        else{
            alert("A segunda palavra não é um subconjunto da primeira...");
        }
    }
};
exerc4();

function exerc5(){
    alert("Exercício 5");

    let data = new Date(prompt("Insira uma data existente (mm/dd/yyyy):"));
    let dds;

    switch(data.getDay()){
        case 0:
            dds = "Domingo";
            break;
        case 1:
            dds = "segunda";
            break;
        case 2:
            dds = "terça";
            break;
        case 3:
            dds = "quarta";
            break;
        case 4:
            dds = "quinta";
            break;
        case 5:
            dds = "sexta";
            break;
        case 6:
            dds = "sábado";
    }

    alert(data.toLocaleDateString('en') + " é " + dds);
};
exerc5();