const calc  = document.getElementById("calc");
const result  = document.getElementById("result");


function CalculeRegra3() {
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    const num3 = parseFloat(document.getElementById('num3').value)
    const partialPercentage =  (num2 * num3) / num1

    alert( "O resultado é: " + partialPercentage + "");
}
calc.addEventListener('click', CalculeRegra3);



