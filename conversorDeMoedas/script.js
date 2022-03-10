// let nome = "Gustavo Maia";
// let notaDoPrimeiroBimestre = 9.324;
// let notaDoSegundoBimestre = 7.25;
// let notaDoTerceiroBimestre = 3.1416;
// let notaDoQuartoBimestre = 8;
// let notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4;

// let notaFixada = notaFinal.toFixed(2);
// console.log("Bem vindo " + nome);
// console.log(notaFinal);
// console.log(notaFixada);

function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmReal = valorEmDolarNumerico * 5.5;
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado, em reais, da conversão é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}
