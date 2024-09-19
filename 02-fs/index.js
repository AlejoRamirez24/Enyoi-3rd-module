const fs = require('fs');
const path = './datos.txt';
const resultadoPath = './resultado.txt';

function contarPalabras(texto) {
  const palabras = texto.trim().split(/\s+/); 
  return palabras.length;
}

// Leer el archivo datos.txt
fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.log('El archivo no existe, creando archivo vacío.');
            fs.writeFile(path, '', (err) => {
                if (err) throw err;
                console.log('Archivo datos.txt creado.');
            });

            fs.writeFile(resultadoPath, 'No hay datos en el archivo.', (err) => {
                if (err) throw err;
                console.log('Archivo resultado.txt creado con el mensaje.');
            });
        } else {
            throw err;
        }
    } else {
        const numeroDePalabras = contarPalabras(data);

        const mensaje = `El archivo contiene ${numeroDePalabras} palabras.`;
        fs.writeFile(resultadoPath, mensaje, (err) => {
            if (err) throw err;
            console.log(mensaje);
        });
    }
});
