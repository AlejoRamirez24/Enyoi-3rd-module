# Clase: Introducción a npm, React y JSX


## 1. ¿Qué es npm? 

### Teoría:
- **npm (Node Package Manager)** es el gestor de paquetes por defecto para Node.js. Permite instalar, compartir y gestionar paquetes de JavaScript.
- Se utiliza para gestionar dependencias en proyectos de JavaScript, principalmente en el ecosistema de Node.js.

### Ejercicio:
- Instalar Node.js y npm (si no está instalado).
- Comprobar la versión de npm:
  ```bash
  npm -v
  ```
- Crear un archivo package.json utilizando:
  ```bash
  npm init -y
  ```

## 2. ¿Qué es React?

### Teoría:
- **React** es una biblioteca de JavaScript para construir interfaces de usuario. Fue desarrollada por Facebook y es conocida por su eficiencia en la creación de aplicaciones en una sola pagina (SPA).

- Ventajas de React:
  - Componetización
  - Virtual DOM para mejorar el rendimiento
  - Ecosistema rico

### Ejercicio:
- Instalar React:
  ```bash
  npm install react react-dom
  ```
- Crear un archivo index.html y un archivo index.js.
- Crear un componente en index.js:
  ```jsx
  import React from 'react';
  import ReactDOM from 'react-dom';

  const App = () => {
    return <h1>Hola Mundo</h1>;
  };

  ReactDOM.render(<App />, document.getElementById('root'));
  ```
- Crear un div con id 'root' en index.html:
  ```html
  <div id="root"></div>
  ```
- Ejecutar el proyecto:
  ```bash
  npx webpack
  ```
- Abrir el archivo index.html en un navegador.

## 3. ¿Qué es JSX?

### Teoría:
- **JSX** es una extensión de JavaScript que permite escribir HTML dentro de JavaScript. Es una sintaxis que facilita la creación de elementos de React.

- JSX es transformado a JavaScript puro utilizando Babel.

### Ejercicio:

- Crear un componente con JSX:
  ```jsx
  import React from 'react';
  import ReactDOM from 'react-dom';

  const App = () => {
    return <h1>Hola Mundo</h1>;
  };

  ReactDOM.render(<App />, document.getElementById('root'));
  ```

- Crear un componente con React.createElement:
  ```jsx
  import React from 'react';
  import ReactDOM from 'react-dom';

  const App = () => {
    return React.createElement('h1', null, 'Hola Mundo');
  };

  ReactDOM.render(React.createElement(App), document.getElementById('root'));
  ```

## 4. Preguntas Frecuentes

### ¿Qué es un componente en React?

- Un **componente** en React es una pieza de la interfaz de usuario que puede ser reutilizada. Puede ser una función o una clase que devuelve un elemento de React.

### ¿Qué es el Virtual DOM?

- El **Virtual DOM** es una representación en memoria del DOM. React utiliza el Virtual DOM para mejorar el rendimiento de las aplicaciones, ya que permite actualizar solo las partes que han cambiado.

### ¿Qué es Babel?

- **Babel** es un compilador de JavaScript que transforma el código de JavaScript moderno a una versión compatible con navegadores antiguos. Se utiliza para transformar JSX a JavaScript puro.

### ¿Qué es Webpack?

- **Webpack** es un empaquetador de módulos para aplicaciones de JavaScript. Se utiliza para agrupar y optimizar los módulos de una aplicación en un solo archivo.

### ¿Qué es un SPA?

- Una **SPA (Single Page Application)** es una aplicación web que carga una sola página y actualiza el contenido dinámicamente. React es conocido por su eficiencia en la creación de SPAs.

## 5. Recursos Adicionales

- [Documentación de React](https://es.reactjs.org/)
- [Documentación de JSX](https://es.reactjs.org/docs/introducing-jsx.html)
- [Documentación de npm](https://docs.npmjs.com/)
- [Documentación de Babel](https://babeljs.io/docs/en/)
- [Documentación de Webpack](https://webpack.js.org/concepts/)


### Ejercicio propuesto:

## Objetivo:
  Crear una pequeña aplicación que muestre una lista de tareas.
## Instrucciones:
  1. Crear un estado en App.jsx para almacenar una lista de tareas.
  2. Usar un formulario para agregar nuevas tareas.
  3. Mostrar la lista de tareas utilizando el método map.
  4. Implementar un botón para eliminar tareas.

## Codigo base:
```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [tasks, setTasks] = useState(['Tarea 1', 'Tarea 2', 'Tarea 3']);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

## Bonus:

- Agregar estilos CSS a la aplicación.
- Implementar un botón para marcar tareas como completadas.
- Agregar un contador de tareas pendientes.


## 6. Conclusiones

- **npm** es el gestor de paquetes por defecto para Node.js.
- **React** es una biblioteca de JavaScript para construir interfaces de usuario.
- **JSX** es una extensión de JavaScript que permite escribir HTML dentro de JavaScript.
- React utiliza el **Virtual DOM** para mejorar el rendimiento de las aplicaciones.
- **Babel** se utiliza para transformar JSX a JavaScript puro.
- **Webpack** es un empaquetador de módulos para aplicaciones de JavaScript.



