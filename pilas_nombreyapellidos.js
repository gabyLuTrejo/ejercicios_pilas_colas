//Constructor Pilas
function Stack(){
  var cosos = [];

  this.push = function(elemento){
    cosos.push(elemento);
  };

  this.pop = function(){
    return cosos.pop();
  };

  this.size = function(){
    return cosos.length;
  };

  this.print = function(){
    console.log(cosos.toString());
  };
}

var nombres = [];
var nombre = new Stack();
var apellido = new Stack();
var cantidaNombres = prompt("Número de personas a agregar");
cantidaNombres = parseInt(cantidaNombres);

for (var i = 1; i <= cantidaNombres; i++) {
  nombre.push(prompt("Nombre de la persona " + i));
  apellido.push(prompt("Apellido de la persona " + i));
}

while(nombre.size()> 0){
  nombres.push(nombre.pop() + " " +apellido.pop());
}

document.write(nombres.join("<br>"));
console.log(nombres.join("\n"));
