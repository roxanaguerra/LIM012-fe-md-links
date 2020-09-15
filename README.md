# LIBRERÍA MD-LINKS

## Índice

* [1. Definición del proyecto](#1-definición-del-proyecto)
* [2. Instalación de la librería](#2-instalación-de-la-librería)
* [3. Guía de uso](#4-guía-de-uso)
* [4. Diagrama de Flujo de la Librería](#4-diagrama-de-flujo-de-la-librería)
* [5. Vista de la Interfaz](#5-vista-de-la-interfaz)

## 1. Definición del proyecto

Esta es una **librería** con NodeJ, que lee y analiza archivos en formato Markdown; que normalmente contiene _links_ (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

> Esta librería te dará un reporte de estado y de validación de los link que encuentre en el archivo Markdown.

![](/img/roxanaguerra-md-links.png)

## 2. Instalación de la librería

* Global:

```
  npm install --global roxanaguerra/LIM012-fe-md-links
```

* Local:

```
  npm install roxanaguerra/LIM012-fe-md-links
```

## 3. Guía de uso

### 3.1. JavaScript API

#### `mdLinks(path, options)`

##### Argumentos

- `path`: Ruta absoluta o relativa al archivo o directorio. 
- `options`: Un objeto con las siguientes propiedades:
  * `validate`: Booleano que determina si se desea validar los links
    encontrados.

#### Ejemplo 

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
```
Probando la librería en otras carpetas:
- Requerimos la librería, llamamos a la varible y le damos dos argumentos (path, validate:true); luego mostramos en consola y nos retorna un array con 5 propiedades.

![](/img/md-links-true.PNG)

- Requerimos la librería, llamamos a la varible y le damos dos argumentos (path, validate:false); luego mostramos en consola y nos retorna un array con 3 propiedades.

![](/img/md-links-false.PNG)

### 3.2. CLI (Command Line Interface - Interfaz de Línea de Comando)

Se ejecuta de la siguiente manera, a través de la terminal:

>`md-links <path-to-file> [options]`

---

##### `md-links`

Al colocar md-links en el terminal, te mostrara un mensaje de bienvenida, y un argumento de ayuda.

Por ejemplo:

![](/img/cli-md-links.PNG)

---

##### `md-links <path-to-file`

Por ejemplo:

![](/img/cli-path.PNG)

---

#### Options

##### `--validate`

Si pasamos la opción --validate, el módulo hace una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una re-dirección a una URL que responde ok, entonces consideraremos el link como 'Ok', sino lo consideramos con 'Fail'.
Así como el status de la respuesta recibida a la petición HTTP a dicha URL.

Por ejemplo:

![](/img/cli-validate.PNG)

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

![](/img/cli-stast.PNG)

##### `--stats --validate`

Para obtener estadísticas que necesiten de los resultados de la validación.

![](/img/cli-stast-validate.PNG)

##### `--help`

Con esta opción se te mostrara las diferentes maneras que puedes usar por consola.

![](/img/cli-help.PNG)

***

## 4. Diagrama de Flujo de la Librería

### 4.1. Diagrama de Flujo de la API

![](/img/mdLinks-Libreria.png)

### 4.2. Diagrama de Flujo del CLI

![](/img/mdLinks-CLI.png)

## 5. Vista de la Interfaz
![vista](/src/screen/md-links.gif)

### Agradecimientos 
Agradezco a Laboratoria y a mis coach que me apoyaron y orientaron para poder completar este proyecto.

***

## Objetivos de aprendizaje

Recuerda colocar en esta sección los objetivos de aprendizaje que quedaron pendientes de tu proyecto anterior.

### Javascript
- [ ] Uso de callbacks
- [x] Consumo de Promesas
- [x] Creacion de Promesas
- [x] Modulos de Js
- [x] Recursión

### Node
- [x] Sistema de archivos
- [x] package.json
- [x] crear modules
- [x] Instalar y usar modules
- [ ] npm scripts
- [x] CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing
- [x] Testeo de tus funciones
- [ ] Testeo asíncrono
- [ ] Uso de librerias de Mock
- [ ] Mocks manuales
- [ ] Testeo para multiples Sistemas Operativos

### Git y Github
- [x] Organización en Github

### Buenas prácticas de desarrollo
- [x] Modularización
- [x] Nomenclatura / Semántica
- [ ] Linting

***

### Tutoriales / NodeSchool workshoppers

- [learnyounode](https://github.com/workshopper/learnyounode)
- [how-to-npm](https://github.com/workshopper/how-to-npm)
- [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)

### Otros recursos

- [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
- [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
- [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
- [Node.js - Wikipedia](https://es.wikipedia.org/wiki/Node.js)
- [What exactly is Node.js? - freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
- [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
- [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
- [¿Simplemente qué es Node.js? - IBM Developer Works, 2011](https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)
- [Node.js y npm](https://www.genbeta.com/desarrollo/node-js-y-npm)
- [Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?](http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175)
- [Asíncronía en js](https://carlosazaustre.com/manejando-la-asincronia-en-javascript/)
- [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
- [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Crear módulos en Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Leer un archivo](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
- [Leer un directorio](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
- [Path](https://nodejs.org/api/path.html)
- [Linea de comando CLI](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)
- [Promise](https://javascript.info/promise-basics)
- [Comprendiendo Promesas en Js](https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1)
- [Pill de recursión - video](https://www.youtube.com/watch?v=lPPgY3HLlhQ&t=916s)
- [Pill de recursión - repositorio](https://github.com/merunga/pildora-recursion)

