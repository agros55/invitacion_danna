let invitado = document.getElementById('invitado');
let cant_pers = document.getElementById('cant_pers');


fetch('assets/datos/invitados.json')
    .then(response => response.json())
    .then(
        data => {
            //invitado.innerHTML=data.INVITADOS.invitados
            const lista_inv = data;

            const inv_filtrado = lista_inv.invitados.filter(e => e.link == "reni")
            console.log(inv_filtrado[0].invitados)
            console.log(inv_filtrado[0].cant_inv)
        })


