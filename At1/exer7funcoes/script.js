function calculo()
{
    var resultado = 5000.0 * 9 / 100;
    return resultado;
}

function mostrarRes()
{
    var resultado = document.getElementById('val_final');
    resultado.textContent = `${calculo()}`   
}

