const prueba = [
    {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\README.md',
        status: 200,
        statusText: 'OK'
    },
    {
        href: 'https://docs.npmjs.com/getting-started/what-is-npmmmmm',
        text: 'NPM',
        file: 'C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\README.md',
        status: 403,
        statusText: 'Fail'
    },
    {
        href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
        text: 'Publicar packpage',
        file: 'C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\README.md',
        status: 200,
        statusText: 'OK'
    },
    {
        href: 'https://docs.npmjs.com/getting-started/publishing-npm-package999s',
        text: 'Crear módulos en Node.js',
        file: 'C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\README.md',
        status: 403,
        statusText: 'Fail'
    },
    {
        href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
        text: 'Leer un archivo',
        file: 'C:\\Users\\GUERRAROXANA\\Documents\\LIM012-FE-MD-LINKS\\test\\prueba\\README.md',
        status: 200,
        statusText: 'OK'
    }
];
const prueba2 = [];

const chalk = require('chalk');

const optionNull = (arrayLinks) => {
    let printLinks = '';
    if (arrayLinks.length > 0) {
        arrayLinks.forEach(element => {
            printLinks +=
                `
            ${chalk.greenBright('PATH: ')} ${chalk.yellowBright(element.file)}
            ${chalk.greenBright('LINK: ')} ${chalk.yellowBright(element.href)}
            ${chalk.greenBright('TEXT: ')} ${chalk.yellowBright(element.text.substring(0, 50))}
            `;
        });
    } else {
        return chalk.bgYellowBright.black('NO SE ENCONTRO LINKS!');
    }
    return printLinks;
};
// console.log(optionNull(prueba));

const optionValidate = (arrayLinks) => {
    let printLinks = '';
    if (arrayLinks.length > 0) {
        arrayLinks.forEach(element => {
            if (element.statusText === 'Fail') {
                printLinks +=
                `
            ${chalk.greenBright('PATH: ')} ${chalk.yellowBright(element.file)}
            ${chalk.greenBright('LINK: ')} ${chalk.yellowBright(element.href)}
            ${chalk.greenBright('STATUS TEXT: ')} ${chalk.redBright(element.statusText)}
            ${chalk.greenBright('STATUS: ')} ${chalk.yellowBright(element.status)}
            ${chalk.greenBright('TEXT: ')} ${chalk.yellowBright(element.text.substring(0, 50))}
            `;
            } else {
                printLinks +=
                `
            ${chalk.greenBright('PATH: ')} ${chalk.yellowBright(element.file)}
            ${chalk.greenBright('LINK: ')} ${chalk.yellowBright(element.href)}
            ${chalk.greenBright('STATUS TEXT: ')} ${chalk.yellowBright(element.statusText)}
            ${chalk.greenBright('STATUS: ')} ${chalk.yellowBright(element.status)}
            ${chalk.greenBright('TEXT: ')} ${chalk.yellowBright(element.text.substring(0, 50))}
            `;
            }
            
        });
    } else {
        return chalk.bgYellowBright.black('NO SE ENCONTRO LINKS!');
    }
    return printLinks;
};
// console.log(optionValidate(prueba2));

const optionStast = (arrayLinks) => {
    if (arrayLinks.length > 0) {
        const newArrayHref = [];
        arrayLinks.forEach(element => {
            newArrayHref.push(element.href);
        });

        let numLinks = newArrayHref.filter((element, index, array) => {
            return (array.indexOf(element) === index);
        });
        const printLinks =
            `
            ${chalk.greenBright('TOTAL: ')} ${chalk.yellowBright(arrayLinks.length)}
            ${chalk.greenBright('LINK: ')} ${chalk.yellowBright(numLinks.length)}             
            `;
        return printLinks;
    } else {
        const printLinks =
            `
            ${chalk.greenBright('TOTAL: ')} ${chalk.yellowBright(0)}
            ${chalk.greenBright('LINK: ')} ${chalk.yellowBright(0)}              
            `;
        return printLinks;
    }
};
// console.log(optionStast(prueba));

const optionStastValidate = (arrayLinks) => {
    if (arrayLinks.length > 0) {
        const newArrayHref = [];
        arrayLinks.forEach(element => {
            newArrayHref.push(element.href);
        });
        const newArrayStatusText = [];
        arrayLinks.forEach(element => {
            newArrayStatusText.push(element.statusText);
        });
        // console.log(newArrayStatusText);
        let numLinks = newArrayHref.filter((element, index, array) => {
            return (array.indexOf(element) === index);
        });
        let numBroken = newArrayStatusText.filter((element) => {
            return element === 'Fail';
        });
        const printLinks =
            ` 
            ${chalk.greenBright('TOTAL: ')} ${chalk.yellowBright(arrayLinks.length)}
            ${chalk.greenBright('LINK: ')} ${chalk.yellowBright(numLinks.length)}
            ${chalk.redBright('BROKEN: ')} ${chalk.redBright(numBroken.length)}
            `;
        return printLinks;
    } else {
        const printLinks =
            `
            ${chalk.greenBright('TOTAL: ')} ${chalk.yellowBright(0)}
            ${chalk.greenBright('LINK: ')} ${chalk.yellowBright(0)}
            ${chalk.redBright('BROKEN: ')} ${chalk.redBright(0)}              
            `;
        return printLinks;
    }

};
// console.log(optionStastValidate(prueba2));

module.exports = {
    optionNull,
    optionValidate,
    optionStast,
    optionStastValidate,
}