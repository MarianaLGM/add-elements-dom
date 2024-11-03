 // Aquí tu código
/*esto es lo que hace funcionar el prompt de manera correcta:*/
const lista=document.getElementById ("lista");
const agregar=document.getElementById ("agregar");


agregar.addEventListener ("click", function(){
    playa  = prompt("¿Cuál es tu playa favorita?",""),
    li.innerHTML = (" Mi playa favorita es " + playa);
});

const ul=document.createElement ("ul");
const li=document.createElement ("li");
ul.append(li);
document.body.append(ul);


/*const elementAgregar = document.createElement ("agregar");
const elementLista = document.createElement ("lista");
const elementPlaya = document.createElement("playa");
const elementAgregar = document.createElement ("agregar");
const elementPlaya = document.createElement("playa");
elementLista.appendChild (agregar);
*/


/*una forma de hacerlo pero sin pulsar el boton
let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
  let data = prompt("Ingresa el texto para el ítem de la lista", "");

  if (!data) {
    break;
  }

  let li = document.createElement('li');
  li.textContent = data;
  ul.append(li);

}*/


