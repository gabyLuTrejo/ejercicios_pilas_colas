//CONSTRUCTOR COLAS
function Queue(){
  var item = [];

  this.enqueue = function (elemento){
    item.push(elemento);
  }

  this.dequeue = function(){
    return item.shift();
  }

  this.size = function(){
    return item.length;
  }
}

var nombre = new Queue();
var apellido = new Queue();
var nombres = [];
var cantidaNombres = prompt("número de personas a agregar");
cantidaNombres = parseInt(cantidaNombres);

for (var i = 1; i <= cantidaNombres ; i++) {
  nombre.enqueue(prompt("Nombre persona " + i));
  apellido.enqueue(prompt("Apellido pesona " + i));
}

while (nombre.size()> 0) {
  nombres.push(nombre.dequeue() + " " + apellido.dequeue());
}

nombres.forEach(function (nombre){
  document.write(nombre + "<br>");
  console.log(nombre);
});
