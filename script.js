function activar()
{
    var  text = "Activado <input type='date'>"

    document.getElementById("active").innerHTML = text;
}

function aumentar()
{
    document.getElementById("size").style.fontSize = "70px"
}

function disminuye()
{
    document.getElementById("size").style.fontSize = "20px"
}

function operaciones()
{
   var nUno =  document.getElementById("numeroUno").value;
   var nDos =  document.getElementById("numeroDos").value;

   var suma = parseInt(nUno) + parseInt(nDos);
   var resta = nUno - nDos;
   var multiplicacion = nUno * nDos;
   var division = nUno / nDos;

   document.getElementById("suma").innerHTML = "La suma es: " + suma;
   document.getElementById("resta").innerHTML = "la resta es: " + resta;
   document.getElementById("multiplicacion").innerHTML = "la multiplicacion es " + multiplicacion;
   document.getElementById("division").innerHTML = "la division es " + division;



}