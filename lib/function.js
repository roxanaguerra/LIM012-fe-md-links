// ******* FILE SYSTEM
const fs = require('fs');
// ******* PATH
const path = require('path');

const ruta1 = './../LIM012-FE-MD-LINKS/test/prueba/readme.md',
    ruta2 = 'C:/Users/GUERRAROXANA/Documents/LIM012-FE-MD-LINKS/test/prueba';

// VERIFICAR SI LA RUTA ES VALIDA
const isValidPath = (receivePath) => {
    if (fs.existsSync(receivePath)) {
        return true;
    }
    else {
        return false;
    }
};
// console.log(isValidPath('./test/prueba/readme.md'));

// DETERMINAR SI LA RUTA ES ABSOLUTA
const pathAbsolute = (receivePath) => path.isAbsolute(receivePath);
// console.log('is absolute: ', pathAbsolute(ruta8));

// OBTENER LA RUTA ABSOLUTA DE UNA RUTA RELATIVA
const getPathAbsolute = (receivePath) => {
    if (pathAbsolute(receivePath)) {
        return receivePath;
    } else {
        return path.resolve(receivePath);
    }
};
// console.log('get absolute: ', getPathAbsolute(ruta2));

// VERIFICAR SI ES UN ARCHIVO
const isFile = (receivePath) => fs.statSync(receivePath).isFile();
// console.log('is file: ', isFile(ruta1));

// EXPORTANDO FUNCIONES
module.exports = {
    isValidPath,
    pathAbsolute,
    getPathAbsolute,
    isFile,
};