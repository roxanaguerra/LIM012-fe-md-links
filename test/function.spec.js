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
    it('is a function: getPathAbsolute', () => {
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

describe('Extraer la extension de una ruta', () => {
    it('is a function: fileExtension', () => {
        expect(typeof mainFunction.fileExtension).toBe('function');
    });
    it('Retornar la extension: .md', () => {
        expect(mainFunction.fileExtension('./test/prueba/readme.md')).toBe('.md');
    });
    it('Retornar la extension: .txt', () => {
        expect(mainFunction.fileExtension('./test/prueba/archivo.txt')).toBe('.txt');
    });
    it('Retornar vacio si es un directorio', () => {
        expect(mainFunction.fileExtension('./../LIM012-FE-MD-LINKS/test/prueba')).toBe('');
    });
});

describe('Leer un archivo', () => {
    it('is a function: readFile', () => {
        expect(typeof mainFunction.readFile).toBe('function');
    });
    it('Leer el archivo.txt y mostrar su informacion', () => {
        expect(mainFunction.readFile('./test/prueba/archivo.txt')).toBe('Hola mundo.');
    });
});

const arrayReadDir = ['archivo.txt', 'prueba.md', 'prueba2', 'README.md'];
describe('Leer un directorio', () => {
    it('is a function: readDir', () => {
        expect(typeof mainFunction.readDir).toBe('function');
    });
    it('Leer un directorio y mostrar los archivos', () => {
        expect(mainFunction.readDir('./../LIM012-FE-MD-LINKS/test/prueba')).toEqual(arrayReadDir);
    });
});

const arrayGetPathFileMD =
    [
        'C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\prueba.md',
        'C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\prueba2\\README2.md',
        'C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\README.md'
    ];
const arrayGetPathFileMD2 =
    [
        'C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\README.md',
    ];
describe('Obtener rutas de archivos .MD', () => {
    it('is a function: getPathFileMD', () => {
        expect(typeof mainFunction.getPathFileMD).toBe('function');
    });
    it('Rutas de archivos .md -> de un directorio', () => {
        expect(mainFunction
            .getPathFileMD('./../LIM012-FE-MD-LINKS/test/prueba'))
            .toEqual(arrayGetPathFileMD);
    });
    it('Ruta de un archivo .MD -> de una ruta absoluta', () => {
        expect(mainFunction
            .getPathFileMD('./../LIM012-FE-MD-LINKS/test/prueba/README.md'))
            .toEqual(arrayGetPathFileMD2);
    });
});

const arrayLinks =
    [
        {
            href: 'https://es.wikipedia.org/wiki/Markdown',
            text: 'Markdown',
            file: 'C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\prueba2\\README2.md'
        },
        {
            href: 'https://docs.npmjs.com/getting-started/what-is-npm',
            text: 'NPM',
            file: 'C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\prueba2\\README2.md'
        },
        {
            href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
            text: 'Publicar packpage',
            file: 'C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\prueba2\\README2.md'
        },
        {
            href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
            text: 'Crear módulos en Node.js',
            file: 'C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\prueba2\\README2.md'
        },
        {
            href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
            text: 'Leer un archivo',
            file: 'C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\prueba2\\README2.md'
        }
    ];

describe('Extraer los links de un archivo .MD', () => {
    it('is a function: extractLinks', () => {
        expect(typeof mainFunction.extractLinks).toBe('function');
    });
    it('Links encontrados: ', () => {
        expect(mainFunction
            .extractLinks('./../LIM012-FE-MD-LINKS/test/prueba/prueba2'))
            .toEqual(arrayLinks);
    });
});

describe('Validar los Link de un archivo .MD', () => {
    it('is a function: isValidateLinks', () => {
        expect(typeof mainFunction.isValidateLinks).toBe('function');
    });
});