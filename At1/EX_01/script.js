function calcLiq()
{
    var nFunc = document.getElementById('cod').valueAsNumber;
    var hn = document.getElementById('hnorm').valueAsNumber;
    var he = document.getElementById('hextr').valueAsNumber;

    var resultado = document.getElementById('val_final');

    var respn = hn * 12;
	var respe = he * 15.50;

    var salBr = respn + respe;

    var salLiq = salBr * 0.1;
	salLiq = salBr - salLiq;
    
    resultado.textContent = `Salário Líquido do funcionário ${nFunc} é: ${salLiq}`
}

function calcBruto()
{
    var nFunc = document.getElementById('cod').valueAsNumber;
    var hn = document.getElementById('hnorm').valueAsNumber;
    var he = document.getElementById('hextr').valueAsNumber;

    var resultado = document.getElementById('val_final');

    var respn = hn * 12;
	var respe = he * 15.50;

    var salBr = respn + respe;

    resultado.textContent = `Salário Bruto do funcionário ${nFunc} é: ${salBr}`
}
