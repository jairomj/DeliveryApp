// function inventario(nombre) {
//     var _nombre = nombre;
//     var _articulos = {};

//     function add(nombre, cantidad) {
//         _articulos[nombre] = cantidad;
//     }
//     function borrar(nombre) {
//         delete _articulos[nombre];
//     }
//     function cantidad(nombre) {
//         return _articulos[nombre];
//     }
//     function nombre() {
//         return _nombre;
//     }
//     return {
//         add: add,
//         borrar: borrar,
//         cantidad: cantidad,
//         nombre: nombre
//     }
// }

// var libros = inventario('libros');
// libros.add("AngularJS", 3);
// libros.add("JavaScript", 10);
// libros.add("NodeJS", 5);
// libros.cantidad("AngularJS");
// libros.cantidad("AngularJS");
// console.log(libros.cantidad("AngularJS"));

// function Inventario (nombre) {
//     this.nombre = nombre;
//     this.articulos = [];
    
//     this.add = function (nombre, cantidad) {
//       this.articulos[nombre] = cantidad;
//     }
    
//     this.borrar = function(nombre) {
//       delete this.articulos[nombre];
//     }
    
//     this.cantidad = function (nombre) {
//       return this.articulos[nombre];
//     }
    
//     this.getNombre = function() {
//       return this.nombre;
//     }
    
//   }
  
//   var libros = new Inventario("Libros");
//   libros.add("AngularJS", 3);
//   libros.add("JavaScript", 10);
//   libros.add("NodeJS", 5);
//   libros.cantidad("JavaScript");
//   console.log(libros.cantidad("AngularJS"));
//   libros.borrar("JavaScript");
//   console.log(libros.cantidad("JavaScript"));
//   console.log(libros.getNombre());
//   var libros = new Inventario("Libros");
// var discos = new Inventario("discos");
// var juegos = new Inventario("juegos");
// var comics = new Inventario("comics");
// console.log(libros);
// console.log(discos);
// console.log(juegos);
// console.log(comics);
// function Inventario (nombre) {
//     this.nombre = nombre;
//     this.articulos = [];
// }
//     Inventario.prototype = {

//         add:  function (nombre, cantidad) {
//             this.articulos[nombre] = cantidad;
//         },
        
//         borrar: function(nombre) {
//             delete this.articulos[nombre];
//         },
        
//         cantidad:  function (nombre) {
//             return this.articulos[nombre];
//         },
        
//         getNombre: function() {
//             return this.nombre;
//         }
//     }
        
//     var libros = new Inventario("Libros");
//     var discos = new Inventario("discos");
//     var juegos = new Inventario("juegos");
//     var comics = new Inventario("comics");
//   libros.add("AngularJS", 3);
//   libros.add("JavaScript", 10);
//   libros.add("NodeJS", 5);
//   comics.add("Batman", 2);
//   libros.cantidad("JavaScript");
//   console.log(libros.cantidad("AngularJS"));
//   libros.borrar("JavaScript");
//   console.log(libros.cantidad("JavaScript"));
//   console.log(comics.getNombre());
//   console.log(libros.getNombre());
//   console.log(comics.cantidad("Batman"));

// console.log(libros);
// console.log(discos);
// console.log(juegos);
// console.log(comics);

//una clase con javascript
// class Vehiculo {
//     constructor (tipo, nombre, ruedas) {
//         this.tipo = tipo;
//         this.nombre = nombre;
//         this.ruedas = ruedas
//     }

//     getRuedas () {
//         return this.ruedas;
//     }

//     arrancar () {
//         console.log(`Arrancando el  ${this.nombre}`);
//     }
//     aparcar () {
//         console.log(`Aparcando el ${this.nombre}`);
//     }
// }

// class Coche extends Vehiculo {
//     constructor (nombre) {
//         super('coche', nombre, 4);
//     }
// }

// let fordFocus = new Coche('Ford Focus');
// let ruedas = fordFocus.getRuedas();
// console.log(ruedas);
// fordFocus.arrancar();

// var miArray = [1, 2, 3, 4];
// miArray.forEach(function (e, i) {
//     console.log("El valor de la position " + i + " es: " + e);
// })

// let libro = {
//     titulo: "Aprendiendo JavaScript",
//     autor: "Jairo Herrera",
//     numPaginas: 100,
//     editorial: "Jairo.sv",
//     precio: "25.50"
// }

// console.log(libro);
//     let propiedades = Object.getOwnPropertyNames(libro);
//     console.log(propiedades);

//     propiedades.forEach(function(name) {
//         let valor = Object.getOwnPropertyDescriptor(libro, name).value;
//         console.log("La propiedad " +name+ " contiene: " + valor);
//     }); 
// Backend
// Sequilize
// posgreSQL
// NodeJS
// swagger
// mongoDB
// mongoose
// JWT

// Frontend
// VUE 
// Viutifi
// Axios
// JWT