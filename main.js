const listaDeTeclas = document.querySelectorAll('.tecla');
const valorNoDisplay = document.getElementById('display');
var numero1 = 0;
var numero2 = 0;
var operador = 0;

function calcular(num1, num2, operador){
    if(operador == "+"){
        return parseInt(num1) + parseInt(num2);
    } else if(operador == "-"){
        return parseInt(num1) - parseInt(num2);
    } else if(operador == "*"){
        return parseInt(num1) * parseInt(num2);
    } else if(operador == "/"){
        return parseInt(num1) / parseInt(num2);
    }
};

for (let i = 0; i < listaDeTeclas.length; i++) { // itera por todas as teclas
    const tecla = listaDeTeclas[i];
    tecla.onclick = () => { // tecla clicada
        if(tecla.id != "C" && tecla.id != "="){ // se a tecla não for "clear" ou "igual"
            const valor = tecla.id;
            valorNoDisplay.innerHTML += valor; // o valor da tecla será exibido no display
            if(valor!="+" && valor!="-" &&valor!="*" &&valor!="/" && operador == 0){
                numero1 += valor;
                console.log("numero 1: completo!")
            } else
            if(valor!="+" && valor!="-" &&valor!="*" &&valor!="/" && operador != 0){
                numero2 = valor;
                console.log("numero 2: completo!")
            }

            if(tecla.id=="+" || tecla.id=="-" || tecla.id=="*" || tecla.id=="/"  && operador==0 && numero1!=0){
                // se tecla for operador
                operador = tecla.id;
            };
        }
        else if(tecla.id == "=" && operador != 0){
            valorNoDisplay.innerHTML = calcular(numero1, numero2, operador);
            numero1 = calcular(numero1, numero2, operador);
            numero2 = 0;
        }
    };
}