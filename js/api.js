const  uri =  "https://raw.githubusercontent.com/urielvaldez/geo-api/master/" ;
let juego_seleccionado  =  null ;

const el_lista = document.querySelector("div.lista");
const el_caja = document.getElementById("img-principal");
const el_titulo = document.getElementById("tit");
const el_datos = document.querySelector("div.center p")

fetch(uri + "datos.json").then(function(respuesta) {
    return respuesta.json()
}).then(function(datos) {
    for(let i =0; i < datos.length; i+=1) {
        //botton
        let nuevo_botton = document.createElement("button");
        nuevo_botton.innerHTML += datos[i].nombre;
        el_lista.appendChild(nuevo_botton);
       //funcion de el botton
       nuevo_botton.addEventListener("click", function() {
        el_caja.src = uri + datos[i].imagen;
        el_titulo.innerHTML = datos[i].nombre;
        el_datos.innerHTML = datos[i].info;
      });

      if(i == 0) {
        nuevo_botton.click();
      }

    }
}).catch(function(error) {
     console.log(error)
});