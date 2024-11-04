 // Aquí tu código
/*esto es lo que hace funcionar el prompt de manera correcta:*/
const lista=document.getElementById("lista");
const agregar=document.getElementById("agregar");



agregar.addEventListener ("click", function(){
  const listaChild=document.createElement("li");
  (playa  = prompt("¿Cuál es tu playa favorita?")),
  (listaChild.textContent = (" Mi playa favorita es " + playa));
  playa="";
  lista.appendChild(listaChild);
});





/*const ul=document.createElement ("ul");
document.body.append(ul);*/


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


