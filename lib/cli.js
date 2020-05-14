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
      return mdLinks(path, {validate: true})
        .then((links) => console.log(cliOptions.optionValidate(links)))
        .catch((err) => err)
    } else if (options === '' || typeof (options) === undefined) {
      return mdLinks(path, {validate: false})
        .then((links) => console.log(chalk.blue(cliOptions.optionNull(links))))
        .catch((err) => err);
    } else if (options === '--stast' || options === '--s') {
      const arrayLinks = functionMdLinks.extractLinks(path);
      return console.log(cliOptions.optionStast(arrayLinks));
    } else if (options === '--stast --validate' || options === '--s --v'
      || options === '--validate --stast' || options === '--v --s') {
      return mdLinks(path, {validate: true})
        .then((links) => console.log(cliOptions.optionStastValidate(links)))
        .catch((err) => err)
    } else {
      console.log(chalk.bgRedBright.black('ERROR:'), chalk.bgYellowBright.black('INVALID OPTION!'));
    }
  } else if (path === '--help' || path === '--h') {
    const printHelp = `
    ${chalk.green('************************** Valid Arguments *************************')}
    ${chalk.greenBright('Option 1:')} ${chalk.yellowBright('md-links <path-to-file>')}
    ${chalk.greenBright('Option 2:')} ${chalk.yellowBright('md-links <path-to-file> --validate || --v')}
    ${chalk.greenBright('Option 3:')} ${chalk.yellowBright('md-links <path-to-file> --stast || --s')}
    ${chalk.greenBright('Option 4:')} ${chalk.yellowBright('md-links <path-to-file> --stast --validate || --s --v')}
    ${chalk.greenBright('Option 5:')} ${chalk.yellowBright('md-links <path-to-file> --validate --stast || --v --s')}
    ${chalk.green('********************************************************************')}
    ${chalk.yellow('--validate')} ${chalk.green('Para averiguar si el link funciona o no')}
    ${chalk.yellow('--stast')} ${chalk.green('Para mostrar estadísticas básicas sobre los links')}    
    ${chalk.yellow('--stast --validate')} ${chalk.green('Para obtener estadísticas de las validaciónes')}
    `;
    return console.log(printHelp);
  } else if (path === undefined) {
      const printWelcome = `
      ${chalk.green('********************* WELCOME MD-LINKS **********************')}
          ${chalk.greenBright('Autor:')} ${chalk.yellowBright('Roxana Guerra')}
          ${chalk.greenBright('Colaboradores:')} ${chalk.yellowBright('Laboratoria')}
      ${chalk.green('*************************************************************')}
      ${chalk.bgMagentaBright.black('md-links --help')}
      `;
      return console.log(printWelcome);
  } else {
    console.log(chalk.bgRedBright.black('ERROR:'), chalk.bgYellowBright.black(' INVALID PATH!'));
  }
};

cli(receivePath, inputOptionStast);
