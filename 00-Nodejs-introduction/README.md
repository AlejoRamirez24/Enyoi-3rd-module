# Nodejs

## ¿Que es?

Es un entorno de ejecuciòn multiplataforma, que nos permite correr JavaScript del lado del servidor, pc.
Permite entrada y salida de datos con una arquitectura orientada a eventos. Está basado en el motor V8 de Google. Es monohilo, pero gracias a que utiliza entradas y salidas asincronas se puede simular un multihilo y manejar la concurrencia

## Bucle de eventos (Event loop)

Cada vez que un cliente establece una conexion con el sistema operativo se ejecuta un callback, ya que Nodejs queda adscrito al mismo. El bucle de gestion de eventos de Nodejs no es llamado explicitamente sino que se activa al final de cada ejecución de una función callback y se termina cuando ya no hay eventos que atender. 

## Entendamoslo de forma más simple

De momento sabemos que para ejecutar JS del lado del cliente, nos apoyamos en los navegadores web los cuales son los entornos de ejecución predilectos para la respresentación, pero aparte de la parte grafica deben permitir tener logica, y es allí donde V8 cobra importancia, ya que es el motor que nos permite compilar codigo fuente de JavaScript en codigode maquina en lugar de iterpretarlo en tiempo real.

De igual manera del lado del servidor necesitamos crear "ese ambiente" que nos permita compilar nuestro codigo y ejecutarlo, es allí donde aparece nodejs como solución, ya que podemos ejecutarlo de manera local en un servidor o computador y v8 hara toda la magia necesaria para que nuestro codigo de js se ejecute correctamente. Al igual que en el navegador tenemos tareas asincronas, y estas son delegadas a terceros, en node pasa exactamente lo mismo, se delegan las tareas asincronas y son manejadas por el bucle de eventos.