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

const arrayValidateLinks =
    [
        {
            "file": "C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\readme.md",
            "href": "https://es.wikipedia.org/wiki/Markdown",
            "status": 200,
            "statusText": "OK",
            "text": "Markdown"
        },
        {
            "file": "C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\readme.md",
            "href": "https://docs.npmjs.com/getting-started/what-is-npmmmmm",
            "status": 403,
            "statusText": "Fail",
            "text": "NPM"
        },
        {
            "file": "C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\readme.md",
            "href": "https://docs.npmjs.com/getting-started/publishing-npm-packages",
            "status": 200,
            "statusText": "OK",
            "text": "Publicar packpage"
        },
        {
            "file": "C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\readme.md",
            "href": "https://docs.npmjs.com/getting-started/publishing-npm-package999s",
            "status": 403,
            "statusText": "Fail",
            "text": "Crear módulos en Node.js"
        },
        {
            "file": "C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\readme.md",
            "href": "https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback",
            "status": 200,
            "statusText": "OK",
            "text": "Leer un archivo"
        }
    ];

module.exports = {
    arrayGetPathFileMD,
    arrayGetPathFileMD2,
    arrayLinks,
    arrayValidateLinks,
}