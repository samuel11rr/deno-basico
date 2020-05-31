console.log('Hola desde deno');
console.log(window);
console.log('En Deno puedo hacer lo mismo que en el navegador, cosa que no se podía con Node.js');



// // --allow-net
// const apiResponse = await fetch('https://pokeapi.co/api/v2/pokemon/1');
// const { name } = await apiResponse.json();
// console.log( name );



// --allow-read
const text = await Deno.readTextFile('./text.txt');
console.log( text );