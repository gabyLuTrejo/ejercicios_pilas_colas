//CONSTRUCTOR COLAS
function Queue(){
  this.dataStore = Array.prototype.slice.call(arguments, 0);
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.empty = empty;

  function enqueue(element){
    this.dataStore.push(element);
  }

  function dequeue(){
    return this.dataStore.shift();
  }

  function empty(){
    return this.dataStore.length == 0;
  }

}

var nombre = new Queue();
// var listaEspera = [];

var cantidadUsuarios = prompt("Numero de usuarios a agregar:");
cantidadUsuarios = parseInt(cantidadUsuarios);

for (var i = 1; i <= cantidadUsuarios; i++) {
  nombre.enqueue(prompt("Nombre usuario " + i));
}

document.write("<h3>Lista de turno de atención <br></h3>");
for (var i = 1; i <= cantidadUsuarios; i++) {
  document.write(i + ". " + nombre.dequeue() +"<br>");
}
