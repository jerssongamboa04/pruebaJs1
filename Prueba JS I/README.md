![](./Logo_Yellow.png)

## Ejercicio 10
Tienes el siguiente objeto:
```javascript
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
    films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts" ],
	height: 1.98
}
```

1. Escribe una función que acepte un hobbie y lo añada a la lista de hobbies de nuestro megaTeacher.
2. Escribe un método `introduceMySelf` dentro del objeto que devuelva el siguiente string: `"Hola, me llamo <name> <lastname>, tengo [age] años y vivo en la calle <street>, <number>. Mis hobbies son: <hobbie>, <hobbie>, <hobbie> (etc.)"`.
3. Modifica la primera función: debe aceptar un array de nuevos hobbies, y se lo añadirá a los hobbies del objeto hasta que éstos últimos sean 8, no más. Ejemplo:
```js
addHobbies(["dancing", "movies", "traveling", "eating", "exercise", "museums"])
console.log(megaTeacher.hobbies) 
//["basketball", "coding", "music", "reading", "dancing", "movies", "traveling", "eating"] 
(al llegar a 8, deja de introducir elementos)
```
4. Escribe un método que te permita modificar los datos personales.
5. Escribe un método que te permita modificar la dirección. 
6. Modifica el metodo anterior para poder añadir una segunda dirección.
7. Escribe un método que en el array de libros, verifique si un libro existe en el array. 
Si existe, imprima el libro en mayusculas. Si no existe agregar a la lista de libros.
8. Escribe una función que te permita añadir películas. Y si no tiene parámetro de entrada te retorne la película de en medio.