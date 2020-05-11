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
// console.log('is absolute: ', pathAbsolute(ruta2));

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

// REVISAR LA EXTENSION DEL ARCHIVO
const fileExtension = (receivePath) => path.extname(receivePath);
// console.log('extension: ', fileExtension(ruta3));

// ****** LEER UN ARCHIVO - SINCRONO 
const readFile = (receivePath) => {
    return fs.readFileSync(receivePath).toString();
};
// console.log('read-archivo: ', readFile(ruta4));

// ****** LEER UN DIRECTORIO - SINCRONO
const readDir = (receivePath) => {
    return fs.readdirSync(receivePath);
};
// console.log('READ-DIR: ', readDir(ruta2));

// OBTENER LA RUTA DE LOS ARCHIVOS .MD
const getPathFileMD = (receivePath) => {
    let arrayFileMD = [];
    const newPath = getPathAbsolute(receivePath);
    if (isFile(newPath)) {
        if (fileExtension(newPath) === '.md') {
            arrayFileMD.push(newPath);
        }
    } else {
        const newReadDir = readDir(receivePath);
        const fileEncontrados = [];
        newReadDir.forEach((obj) => {
            const newReceivePath = path.join(newPath, obj);
            const fileOfDirectory = getPathFileMD(newReceivePath);
            arrayFileMD = arrayFileMD.concat(fileOfDirectory);
        });
    }
    return arrayFileMD;
};
//  console.log(getPathFileMD(ruta2));

// EXPORTANDO FUNCIONES
module.exports = {
    isValidPath,
    pathAbsolute,
    getPathAbsolute,
    isFile,
    fileExtension,
    readFile,
    readDir,
    getPathFileMD,
};