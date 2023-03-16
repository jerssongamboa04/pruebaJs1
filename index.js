// Tienes el siguiente objeto:
// ```javascript

// const megaTeacher = {
//     name: "Pablo",
//     lastname: "Quintana",
//     age: 27,
//     vegan: false,
//     address: {
//         street: "Gran Vía",
//         number: 73,
//         floor: 4
//     },
//     hobbies: ["basketball", "coding", "music", "reading"],
//     books: ["Lord of the Flies", "Books of Blood"],
//     films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts"],
//     height: 1.98
// }

// ============================== EJERCICIO 1º ====================================
// 1. Escribe una función que acepte un hobbie
//  y lo añada a la lista de hobbies de nuestro megaTeacher.

// function addHobbies(hobbie) {
// return megaTeacher.hobbies.push(hobbie);

// }
// addHobbies("Dancing");
// console.log(megaTeacher.hobbies);

// ============================== EJERCICIO 2º ====================================
// 2. Escribe un método `introduceMySelf` dentro del objeto que devuelva el 
// siguiente string: `"Hola, me llamo <name> <lastname>, tengo [age] años y
//  vivo en la calle <street>, <number>. Mis hobbies son: <hobbie>, <hobbie>, <hobbie> (etc.)"`.

// const megaTeacher = {
// 	name: "Pablo",
// 	lastname: "Quintana",
// 	age: 27,
// 	vegan: false,
// 	address: {
// 		street: "Gran Vía",
// 		number: 73,
// 		floor: 4
// 	},
// 	hobbies: ["basketball", "coding", "music", "reading"],
//     books: ["Lord of the Flies", "Books of Blood"],
//     films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts" ],
// 	height: 1.98,

//     introduceMySelf: function () {
//         return `"Hola, me llamo ${this.name} ${this.lastname}, tengo ${this.age} años y vivo en la calle ${this.address.street},
//          ${this.address.number}. Mis hobbies son: ${this.hobbies[0]}, ${this.hobbies[1]}, ${this.hobbies[2]}, ${this.hobbies[3]}, (etc.)".`;
//     }
// }
// console.log(megaTeacher.introduceMySelf());

// ============================== EJERCICIO 3º ====================================

// 3. Modifica la primera función: debe aceptar un array de nuevos hobbies, y 
// se lo añadirá a los hobbies del objeto hasta que éstos últimos sean 8, no más. Ejemplo:
// ```js
// addHobbies(["dancing", "movies", "traveling", "eating", "exercise", "museums"])
// console.log(megaTeacher.hobbies) 
// //["basketball", "coding", "music", "reading", "dancing", "movies", "traveling", "eating"] 
// (al llegar a 8, deja de introducir elementos)


// function addHobbies(newHobbies) {
//     for (let hobby of newHobbies) {
//       if (megaTeacher.hobbies.length < 8) {
//         megaTeacher.hobbies.push(hobby);
//       } else {
//         break;
//       }
//     }
//   }

// addHobbies(["dancing", "movies", "traveling", "eating", "exercise", "museums"]);
// console.log(megaTeacher.hobbies);

// ============================== EJERCICIO 4º ====================================

// 4. Escribe un método que te permita modificar los datos personales.

// const megaTeacher = {
//     name: "Pablo",
//     lastname: "Quintana",
//     age: 27,
//     vegan: false,
//     address: {
//         street: "Gran Vía",
//         number: 73,
//         floor: 4
//     },
//     hobbies: ["basketball", "coding", "music", "reading"],
//     books: ["Lord of the Flies", "Books of Blood"],
//     films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts"],
//     height: 1.98,

//     modifyData: function (newName) {
//        return this.name = newName
//     }
// }
// megaTeacher.modifyData("jersson");
// console.log(megaTeacher);

// ============================== EJERCICIO 5º ====================================

// 5. Escribe un método que te permita modificar la dirección. 

// const megaTeacher = {
//     name: "Pablo",
//     lastname: "Quintana",
//     age: 27,
//     vegan: false,
//     address: {
//         street: "Gran Vía",
//         number: 73,
//         floor: 4
//     },
//     hobbies: ["basketball", "coding", "music", "reading"],
//     books: ["Lord of the Flies", "Books of Blood"],
//     films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts"],
//     height: 1.98,

//     modifyAddres: function (newStreet,newNumber,newFloor) {
//        return this.address.street = newStreet , this.address.number = newNumber, this.address.floor = newFloor;
//     }
// }
// megaTeacher.modifyAddres("Virgen de los remedios",3,"bajo Izq");
// console.log(megaTeacher);

// ============================== EJERCICIO 6º ====================================

// 6. Modifica el metodo anterior para poder añadir una segunda dirección.


// const megaTeacher = {
//     name: "Pablo",
//     lastname: "Quintana",
//     age: 27,
//     vegan: false,
//     address: {
//         street: "Gran Vía",
//         number: 73,
//         floor: 4
//     },
//     hobbies: ["basketball", "coding", "music", "reading"],
//     books: ["Lord of the Flies", "Books of Blood"],
//     films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts"],
//     height: 1.98,

//    addNewDirecction : function (newStreet,newNumber,newFloor,add) {

//      if (add == true){ 
//       megaTeacher.address.addressTwo = {
//       street: newStreet,
//       number: newNumber,
//       floor: newFloor
//      };} 
//     }
// }

// megaTeacher.addNewDirecction("fundicion",60,7,false);
// console.log(megaTeacher.address);

// ============================== EJERCICIO 7º ====================================

// 7. Escribe un método que en el array de libros, verifique si un libro existe en el array. 
// Si existe, imprima el libro en mayusculas. Si no existe agregar a la lista de libros.



const megaTeacher = {
    name: "Pablo",
    lastname: "Quintana",
    age: 27,
    vegan: false,
    address: {
        street: "Gran Vía",
        number: 73,
        floor: 4
    },
    hobbies: ["basketball", "coding", "music", "reading"],
    books: ["Lord of the Flies", "Books of Blood"],
    films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts"],
    height: 1.98,
    checkBook: function (book) {
        let index = megaTeacher.books.indexOf(book);

        if (index !== -1) {
            console.log(book.toUpperCase());
        } else {
            megaTeacher.books.push(book);
        }
    }
}
megaTeacher.checkBook("Books of Blood");
console.log(megaTeacher.books);

// ============================== EJERCICIO 8º ====================================







