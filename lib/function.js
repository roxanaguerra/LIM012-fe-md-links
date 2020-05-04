// ******* FILE SYSTEM
// utilizado para acceder al sistema de archivos
const fs = require('fs');
// ******* PATH
const path = require('path');
// ******* PROCESS
// proporciona información y control sobre el proceso actual de Node.js.
const process = require('process');
// ******* MARKET
const marked = require('marked');
const renderer = new marked.Renderer();
// ******* FETCH
const fetch = require('node-fetch');

const ruta1 = './../LIM012-FE-MD-LINKS' ,ruta2 = '/README2.md' ,
ruta3 = './../LIM012-FE-MD-LINKS/lib', ruta4 = './README2.md' ,
ruta5 = './../LIM012-FE-MD-LINKS22/lib';

// RECIBIR LA RUTA O DIRECTORIO INGRESADAO
const receivePath2 = process.argv[1];
console.log('recibir ruta: ', receivePath2);

// RECIBIR OPTIONS (validate)
const receiveOptions = process.argv[2];
console.log('recibir options: ', receivePath2);

// VERIFICAR SI LA RUTA ES VALIDA
const isValidPath = (receivePath) => {
    if (fs.existsSync(receivePath)) {
      return true;
    }
    else {
      return false;
    }
}
console.log('la ruta es valida: ', isValidPath(ruta4));

// DETERMINAR SI LA RUTA ES ABSOLUTA
const pathAbsolute = (receivePath) => path.isAbsolute(receivePath);
console.log('is absolute: ', pathAbsolute(ruta4));

// EXPORTANDO FUNCIONES
module.exports = {
    pathAbsolute,
    isValidPath,
} ;