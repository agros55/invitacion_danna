let invitado = document.getElementById('invitado');
let cant_pers = document.getElementById('cant_pers');
const valores = window.location.search;

const urlParams = new URLSearchParams(valores);
var invit = urlParams.get('invitado');
console.log(invit);

fetch('assets/datos/invitados.json')
    .then(response => response.json())
    .then(
        data => {
            //invitado.innerHTML=data.INVITADOS.invitados
            const lista_inv = data;

            const inv_filtrado = lista_inv.invitados.filter(e => e.link == invit)
            console.log(inv_filtrado[0].invitados)
            console.log(inv_filtrado[0].cant_inv)
            invitado.innerHTML = inv_filtrado[0].invitados
            if (inv_filtrado[0].cant_inv == 1)
                cant_pers.innerHTML = inv_filtrado[0].cant_inv + " Persona"
            else
                cant_pers.innerHTML = inv_filtrado[0].cant_inv + " Personas"

        })


