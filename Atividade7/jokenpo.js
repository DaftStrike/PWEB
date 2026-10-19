const jogo = ["pedra", "papel", "tesoura"];

const rand = Math.floor(Math.random() * jogo.length);
const pickup = jogo[rand];

alert("JOKENPO!");
let user = prompt("pedra, papel ou tesoura?");
user = user.toLowerCase();

switch(user){
    case "pedra":
        switch(pickup){
        case "pedra":
            alert("O computador escolheu pedra...");
            alert("Empate!");
            break;
        case "papel":
            alert("O computador escolheu papel...");
            alert("Derrota!");
            break;
        case "tesoura":
            alert("O computador escolheu tesoura...");
            alert("Vitória!");
            break;
        }
        break;
    case "papel":
        switch(pickup){
        case "pedra":
            alert("O computador escolheu pedra...");
            alert("Vitória!");
            break;
        case "papel":
            alert("O computador escolheu papel...");
            alert("Empate!");
            break;
        case "tesoura":
            alert("O computador escolheu tesoura...");
            alert("Derrota!");
            break;
        }
        break;
    case "tesoura":
        switch(pickup){
        case "pedra":
            alert("O computador escolheu pedra...");
            alert("Derrota!");
            break;
        case "papel":
            alert("O computador escolheu papel...");
            alert("Vitória");
            break;
        case "tesoura":
            alert("O computador escolheu tesoura...");
            alert("Empate!");
            break;
        }
        break;
    default:
        alert("Valor não é válido!");
}