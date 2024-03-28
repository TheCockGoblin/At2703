function calculo()
{
    var resultado = 10 * 9;
    return resultado;
}

function mostrarRes()
{
    var resultado = document.getElementById('val_final');
    resultado.textContent = `${calculo()}`   
}

