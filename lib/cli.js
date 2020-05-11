#!/usr/bin/env node
const { mdLinks } = require('./mdLinks.js');
const cliOptions = require('./cliOptions.js');
const functionMdLinks = require('./function.js');
const chalk = require('chalk');
// ******* PROCESS
const process = require('process');

const ruta1 = './test/prueba/readme.md', option1 = '',
  ruta2 = 'C:/Users/GUERRAROXANA/Documents/LIM012-FE-MD-LINKS/test/prueba', option2 = '--validate',
  option3 = '--stast', option4 = '--stast --validate', option5 = '--help';

// RECIBIR LA RUTA O DIRECTORIO INGRESADA
const receivePath = process.argv[2];
// console.log('recibir ruta: ', receivePath);

// RECIBIR OPTION Y STAST 
const inputConsola = process.argv;
const optionAndStast = inputConsola.slice(3);
const inputOptionStast = optionAndStast.join(' ');
// console.log('unir: ', inputOptionStast);

const cli = (path, options) => {
  if (functionMdLinks.isValidPath(path)) {
    if (options === '--validate' || options === '--v') {
      return mdLinks(path, options)
        .then((links) => console.log(chalk.red(cliOptions.optionValidate(links))))
        .catch((err) => err)
    } else if (options === '' || typeof (options) === undefined) {
      return mdLinks(path, options)
        .then((links) => console.log(chalk.blue(cliOptions.optionNull(links))))
        .catch((err) => err);
    } else if (options === '--stast' || options === '--s') {
      const arrayLinks = functionMdLinks.extractLinks(path);
      return console.log(cliOptions.optionStast(arrayLinks));
    } else if (options === '--stast --validate' || options === '--s --v'
      || options === '--validate --stast' || options === '--v --s') {
      const arrayLinks = functionMdLinks.isValidateLinks(path)
        .then((links) => (links))
        .catch(err => err);
      console.log(arrayLinks);
      return console.log(cliOptions.optionStastValidate(arrayLinks));
    } else {
      console.log(chalk.bgRed.black('ERROR:'), chalk.bgYellow.black(' OPTION INVALIDA!'));
    }
  } else if (path === '--help' || path === '--h') {
    const printHelp = `
            ${(console.table([
      { ARGUMENT: 'md-links <path>' },
      { ARGUMENT: 'md-links <path> --validate || md-links <path> --v' },
      { ARGUMENT: 'md-links <path> --stast || md-links <path> --s' },
      { ARGUMENT: 'md-links <path> --stast --validate' },
      { ARGUMENT: 'md-links <path> --validate --stast' },
      { ARGUMENT: 'md-links <path> --s --v || md-links <path> --v --s' },
    ]))}`;
    return printHelp;
  } else {
    console.log(chalk.bgRed.black('ERROR:'), chalk.bgYellow.black(' RUTA INVALIDA!'));
  }

};

cli(receivePath, inputOptionStast);
