function calcMult()
{
    var x = document.getElementById('n1').valueAsNumber;
    var y = document.getElementById('n2').valueAsNumber;

    var resultado = document.getElementById('val_final');
    
    resultado.textContent = `Multiplicação: ${x * y}`
}

function calcSoma()
{
    var x = document.getElementById('n1').valueAsNumber;
    var y = document.getElementById('n2').valueAsNumber;

    var resultado = document.getElementById('val_final');

    resultado.textContent = `Soma: ${x + y}`
}
