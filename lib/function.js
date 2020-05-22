// ******* FILE SYSTEM
const fs = require('fs');
// ******* PATH
const path = require('path');
// ******* MARKET
const marked = require('marked');
const renderer = new marked.Renderer();
// ******* FETCH
const fetch = require('node-fetch');

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
        const callback = (obj) => {
            const newReceivePath = path.join(newPath, obj);
            const fileOfDirectory = getPathFileMD(newReceivePath);
            arrayFileMD = arrayFileMD.concat(fileOfDirectory);
        };
        newReadDir.forEach(callback);
    }
    return arrayFileMD;
};
//  console.log(getPathFileMD(ruta2));

console.log(marked(readFile(ruta1)));
// EXTRAER LOS LINK'S
const extractLinks = (receivePath) => {
    let arrayLinks = [];
    getPathFileMD(receivePath).forEach((file) => {
        renderer.link = (href, title, text) => {
            const link = {
                href: href,
                text: text,
                file: file
            };
            arrayLinks.push(link);
        };
        marked(readFile(file), { renderer });
    });
    return arrayLinks;
};
// console.log(extractLinks(ruta1));

const isValidateLinks = (route) => {
    const allLinks = extractLinks(route);
    const newArray = allLinks.map((obj) => {
        return new Promise((resolve, reject) => {
            fetch(obj.href)
                .then((res) => {
                    // console.log(res.status);
                    // console.log(res.statusText);
                    obj.status = res.status;
                    (obj.status >= 200 && obj.status < 400) ? obj.statusText = 'OK' : obj.statusText = 'Fail';
                    resolve(obj);
                })
                .catch((error) => {
                    reject(error);
                });
        });

    });
    return Promise.all(newArray)
        .then(res => (res));
};
// isValidateLinks(ruta1).then((resp) => console.log(resp));

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
    extractLinks,
    isValidateLinks,
};