import { serve } from 'https://deno.land/std/http/server.ts';

const server = serve({ port: 3000 });
console.log( 'Corriendo Deno en http://localhost:3000' );
// deno run --allow-net --allow-read server.ts



for await ( const request of server ) {
  // request.respond({ body: 'Hola desde Deno :D' })
  switch( request.url ) {
    case '/':
      request.respond({ body: 'Hola desde Deno!' })
      break;

    case '/prueba1':
      request.respond({ body: 'ruta /prueba1' })
      break;

    case '/html':
      const html = await Deno.readTextFile('./response.html')
      request.respond({ body: html + '\n' });
      break;

    case '/json':
      const data = JSON.stringify({ data: 'Hola desde el api' });
      request.respond({ body: data + '\n' });
      break;

    default:
      request.respond({ status: 404 })
      break;
  }
}