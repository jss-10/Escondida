"use strict";
function agrega_elemento()
{
    var tbl_productos = document.getElementById("tbl_productos");
    var txt_descripcion = document.getElementById("txt_descripcion");
    var fila = tbl_productos.insertRow(1);

    var columna1 = fila.insertCell(0);
    var columna2 = fila.insertCell(1);
    var columna3 = fila.insertCell(2);
    var columna4 = fila.insertCell(3);

    columna1.innerHTML = "NEW CELL1";
    columna2.innerHTML = txt_descripcion.value;
    columna3.innerHTML = "NEW CELL3";
    columna4.innerHTML = "NEW CELL4";
}

function saludo(cadena)
{
    alert(cadena);
}