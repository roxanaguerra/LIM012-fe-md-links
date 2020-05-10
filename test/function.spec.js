const mainFunction = require('../lib/function.js');
// import {
//     pathAbsolute,
// } from '../lib/function.js';

describe('Si la ruta es Valida', () => {
    it('is a function: isValidPath', () => {
        expect(typeof mainFunction.isValidPath).toBe('function');
    });
    it('Retornar true si es la ruta es valida', () => {
        expect(mainFunction.isValidPath('./test/prueba/README.md')).toBe(true);
    });
    it('Retornar false si es la ruta no es valida', () => {
        expect(mainFunction.isValidPath('/test/prueba/readme.md')).toBe(false);
    });
});

describe('Funcion - Ruta absoluta', () => {
    it('is a function: pathAbsolute', () => {
        expect(typeof mainFunction.pathAbsolute).toBe('function');
    });
    it('Retornar true si es la ruta es absoluta', () => {
        expect(mainFunction.pathAbsolute('/prueba/readme.md')).toBe(true);
    });
    it('Retornar false si es la ruta es relativa', () => {
        expect(mainFunction.pathAbsolute('./prueba/readme.md')).toBe(false);
    });
});

describe('Funcion - Obtener Ruta Absoluta', () => {
    it('is a funcion: getPathAbsolute', () => {
        expect(typeof mainFunction.getPathAbsolute).toBe('function');
    });
    it('Retornar una ruta Absoluta de una pathAbsolute', () => {
        expect(mainFunction.getPathAbsolute('/readme.md')).toBe('/readme.md');
    });
    it('Retornar una ruta Absoluta de una pathRelativa', () => {
        expect(mainFunction.getPathAbsolute('./../LIM012-FE-MD-LINKS'))
            .toBe('C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS');
    });
});

describe('Si es un Archivo', () => {
    it('is a function: isFile', () => {
        expect(typeof mainFunction.isFile).toBe('function');
    });
    it('Retornar true si es la ruta es un arhivo', () => {
        expect(mainFunction.isFile('./../LIM012-FE-MD-LINKS/test/prueba/README.md')).toBe(true);
    });
    it('Retornar false si es la ruta no es archivo', () => {
        expect(mainFunction.isFile('./../LIM012-FE-MD-LINKS/test/prueba')).toBe(false);
    });
});

