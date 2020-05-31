import {bgWhite, black} from 'https://deno.land/std/fmt/colors.ts';

const msg = bgWhite( black('Hola desde Deno') );

console.log( msg );