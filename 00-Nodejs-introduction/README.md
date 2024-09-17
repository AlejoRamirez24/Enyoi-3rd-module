# 🔨 Node.js

## ¿Que es?

Es un entorno de ejecuciòn multiplataforma, que nos permite correr JavaScript del lado del servidor, pc.
Permite entrada y salida de datos con una arquitectura orientada a eventos. Está basado en el motor V8 de Google. Es monohilo, pero gracias a que utiliza entradas y salidas asincronas se puede simular un multihilo y manejar la concurrencia

## 🔁 Bucle de eventos (Event loop)

Cada vez que un cliente establece una conexion con el sistema operativo se ejecuta un callback, ya que Node.js queda adscrito al mismo. El bucle de gestion de eventos de Node.js no es llamado explicitamente sino que se activa al final de cada ejecución de una función callback y se termina cuando ya no hay eventos que atender. 

## 📝 Entendamoslo de forma más simple

De momento sabemos que para ejecutar JS del lado del cliente, nos apoyamos en los navegadores web los cuales son los entornos de ejecución predilectos para la respresentación, pero aparte de la parte grafica deben permitir tener logica, y es allí donde V8 cobra importancia, ya que es el motor que nos permite compilar codigo fuente de JavaScript en codigo de maquina en lugar de iterpretarlo en tiempo real.

De igual manera del lado del servidor necesitamos crear "ese ambiente" que nos permita compilar nuestro codigo y ejecutarlo, es allí donde aparece nodejs como solución, ya que podemos ejecutarlo de manera local en un servidor o computador y v8 hara toda la magia necesaria para que nuestro codigo de js se ejecute correctamente. Al igual que en el navegador tenemos tareas asincronas, y estas son delegadas a terceros, en node pasa exactamente lo mismo, se delegan las tareas asincronas y son manejadas por el bucle de eventos.

## 🔩 Instalación

La instalación de node.js es relativamente sencilla, va a depender del sistema operativo que tengas.
A continuación te dejo el enlace donde podras seguir el paso a paso.
Te recomendamos descargar la version LTS ya que es la más estable.

https://nodejs.org/en/download/package-manager

## ✅ Verificamos la instalacion

Con los siguientes comandos verificaremos que la instalación se haya realizado correctamente.

```bash
node -v
npm -v
```

## 🎶 Inicialicemos un proyecto

Para inicializar un proyecto de node.js, debemos primero ubicarnos en la carpeta donde queremos crear nuestro proyecto ejecutar el siguiente comando.

```bash
npm init
```

## 🥊 CommonJS y ESM

Node.js utiliza CommonJS para importar y exportar módulos, pero a partir de la versión 12.17.0 se puede utilizar ESM (ECMAScript Modules) para importar y exportar módulos.

La diferencia principal entre CommonJS y ESM es que CommonJS es síncrono y ESM es asíncrono. Otra diferencia es que CommonJS utiliza `require` y `module.exports` para importar y exportar módulos, mientras que ESM utiliza `import` y `export`.

Para utilizar ESM debemos agregar `"type": "module"` en el archivo `package.json`.

```json
{
  "type": "module"
}
```

## Ejercicio

Ya que hemos aprendido un poco sobre Node.js, vamos a realizar un ejercicio sencillo para poner en práctica lo aprendido.

1. Crear un archivo llamado `index.js`.
2. Dentro del archivo `index.js` vamos a escribir el siguiente código.

```js
console.log('Hola mundo');
```

3. Guardamos el archivo.

4. Abrimos una terminal y nos ubicamos en la carpeta donde se encuentra el archivo `index.js`.

5. Ejecutamos el siguiente comando.

```bash
node index.js
```

6. Deberíamos ver en la terminal el mensaje `Hola mundo`.

¡Felicidades! Has ejecutado tu primer script de Node.js.

## 📚 Recursos

- [Node.js](https://nodejs.org)
- [V8](https://v8.dev)
- [CommonJS](https://requirejs.org/docs/commonjs.html)
- [ECMAScript Modules](https://nodejs.org/api/esm.html)

## Ejercicios propuestos

1. Leeremos el contenido de un archivo llamado datos.txt.
2. Cuenta cuántas palabras hay en el archivo.
3. Escribe el número de palabras en un nuevo archivo llamado resultado.txt.

Tips: Utiliza el módulo nativo de node `fs` para leer y escribir archivos.
