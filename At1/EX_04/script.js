var p = 1;
function calc()
{
    var p2 = p;
    var x = document.getElementById('n1').valueAsNumber;

    var i = 100 - x;

    const listaNms = document.getElementById("listaId");

    if(x > 100)
    {
        alert('este número já é maior que 100')
    }
    else
    {   
        for (let l = 0; l <= p2; l++) 
        {
            listaNms.removeChild(document.getElementById("itens")); 
            p--;
        }

        for (i; i > 0; i--) {
            x = x + 1;
            const novoItem = document.createElement('li');
            novoItem.setAttribute('id', 'itens');
            novoItem.textContent = x;
            listaNms.appendChild(novoItem);  
            p = p + 1;
        }
        console.log(p);
    }
}

