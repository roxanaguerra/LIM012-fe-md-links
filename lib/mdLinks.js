const functionMdLinks = require('./function.js');

const ruta1 = './../LIM012-FE-MD-LINKS/test/prueba/readme.md', option1 = '--validate',
    ruta2 = 'C:/Users/GUERRAROXANA/Documents/LIM012-FE-MD-LINKS/test/prueba', option2 = '',
    option3 = '--valid';

const mdLinks = (path, options) => {
    const allLinks = new Promise((resolve, reject) => {
        if (functionMdLinks.isValidPath(path)) {
            if (options === '') {
                resolve(functionMdLinks.extractLinks(path));
            } else if (options === '--validate' || options === '--v') {
                return (functionMdLinks.isValidateLinks(path).then((links) => resolve(links)));
            } else {
                // reject ((new Error('Option invalidate: ')).message)
                reject('Parametro invalido ');
            }
        } else {
            // reject ((new Error('Path is not valid ')).message)
            reject(console.log('Path is not valid'))
        }
    });
    return allLinks;
};
// mdLinks(ruta1, option1).then(res => console.log(res));

module.exports = { mdLinks };