const mainFunction = require('../lib/function.js');
// import {
//     pathAbsolute,
// } from '../lib/function.js';

describe('Si la ruta es Valida', () => {
    it('is a function: isValidPath', () => {
        expect(typeof mainFunction.isValidPath).toBe('function');
    });
    it('Retorar true si es la ruta es valida', () => {
        expect(mainFunction.isValidPath('/readme.md').toBe(true));
    });
    it('Retorar false si es la ruta no es valoda', () => {
        expect(mainFunction.isValidPath('./readme.md').toBe(false));
    });
});

describe('Funcion - Ruta absoluta', () => {
    it('is a function: pathAbsolute', () => {
        expect(typeof mainFunction.pathAbsolute).toBe('function');
    });
    it('Retorar true si es la ruta es absoluta', () => {
        expect(mainFunction.pathAbsolute('/readme.md').toBe(true));
    });
    it('Retorar false si es la ruta es relativa', () => {
        expect(mainFunction.pathAbsolute('./readme.md').toBe(false));
    });
});