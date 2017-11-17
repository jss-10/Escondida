"use strict";

function foco()
{
    document.getElementById("txt_buscar").focus();
}

function crearColumna(nombre, fila)
{
    var td = document.createElement("td");
    var input = document.createElement("input");
    var par = document.createElement("p");
    var btn_menos = document.createElement("button");
    var btn_mas = document.createElement("button");
    var img_menos = document.createElement("img");
    img_menos.setAttribute("src","iconos/minus2.png");
    var img_mas = document.createElement("img");
    img_mas.setAttribute("src","iconos/plus2.png");
    btn_menos.appendChild(img_menos);
    btn_mas.appendChild(img_mas);
    par.innerHTML = "texto";
    input.type = "text";
    input.setAttribute("name",nombre+"_"+fila);
    input.setAttribute("id",nombre+"_"+fila);
    //input.appendChild(btn_menos);
    if(nombre == "c")
    {
        td.appendChild(btn_menos);
        td.appendChild(input);
        td.appendChild(btn_mas);
    }
    else
    {
        td.appendChild(par);
    }
    return td;
}

var n_fila = 0;
function agregarFila()
{
    var destino = document.getElementById("tbl_cuerpo");
    var tr = document.createElement("tr");
    tr.appendChild(crearColumna("a",n_fila));
    tr.appendChild(crearColumna("b",n_fila));
    tr.appendChild(crearColumna("c",n_fila));
    //tr.appendChild(crearColumna("d",n_fila));
    var btn = document.createElement("button");
    var img = document.createElement("img");
    img.setAttribute("src","iconos/eliminar2.png");
    btn.setAttribute("onclick","quitarFila(this)");
    btn.setAttribute("class","btn btn-default");
    var td = document.createElement("td");
    btn.appendChild(img);
    td.appendChild(btn);
    tr.appendChild(td);
    destino.appendChild(tr);
    n_fila++;
}

function quitarFila(btn)
{
    var fila = btn.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
    n_fila--;
}