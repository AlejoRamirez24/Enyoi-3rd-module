### Clase: Introducción a React y Ciclo de Vida de un Componente

#### 1. Introducción a React

##### ¿Qué es React?
React es una biblioteca de JavaScript para construir interfaces de usuario. Es declarativo, eficiente y flexible. React permite construir componentes reutilizables que pueden gestionarse de manera dinámica.

##### ¿Por qué usar React?
- Separación de la lógica y la vista en componentes.
- Eficiencia en la actualización de la UI usando un **DOM virtual**.
- Enfocado en la creación de aplicaciones de una sola página (SPA).

##### Conceptos clave:
- **Componente**: La unidad básica de construcción en React.
- **JSX**: Sintaxis que permite escribir HTML dentro de JavaScript.
- **Props**: Son los datos que se pasan entre componentes.
- **State**: El estado de un componente, el cual puede cambiar a lo largo de su ciclo de vida.

#### 2. Instalación y configuración básica


1. **Crear una aplicación de React**:
```bash 
 npm create vite@latest mi-primer-react-app
cd mi-primer-react-app
npm run dev
```

#### 3. Estructura de un Componente en React
Los componentes pueden escribirse como **clases** o **funciones**.

##### Componente funcional:
```javascript
function ComponenteFuncional() {
  return (
    <div>
      <h1>Hola, soy un componente funcional</h1>
    </div>
  );
}

export default ComponenteFuncional;
```

##### Componente de clase:
```javascript
import React, { Component } from 'react';

class ComponenteClase extends Component {
  render() {
    return (
      <div>
        <h1>Hola, soy un componente de clase</h1>
      </div>
    );
  }
}

export default ComponenteClase;
```

---

### 4. Ciclo de Vida de un Componente
El ciclo de vida de un componente React se refiere a las diferentes etapas por las que pasa desde su creación hasta su destrucción.

#### 4.1 Ciclo de vida en componentes de clase
Los componentes de clase tienen métodos específicos que permiten controlar diferentes fases de su ciclo de vida:

1. **Montaje** (cuando el componente se añade al DOM):
   - `constructor()`: Inicializa el componente.
   - `componentDidMount()`: Se llama después de que el componente se ha renderizado por primera vez.

2. **Actualización** (cuando las props o el estado cambian):
   - `componentDidUpdate()`: Se llama después de que el componente se haya actualizado.

3. **Desmontaje** (cuando el componente se elimina del DOM):
   - `componentWillUnmount()`: Se llama justo antes de que el componente se retire del DOM.

##### Ejemplo de ciclo de vida en un componente de clase:
```javascript
import React, { Component } from 'react';

class CicloDeVidaClase extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  incrementarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.incrementarContador}>Incrementar</button>
      </div>
    );
  }
}

export default CicloDeVidaClase;
```

#### 4.2 Ciclo de vida en componentes funcionales (con Hooks)
En los componentes funcionales, el ciclo de vida se gestiona con el hook **`useEffect`**, que permite ejecutar efectos secundarios en diferentes momentos.

- **useEffect**: Se usa para manejar el ciclo de vida de un componente funcional. Combina lo que `componentDidMount`, `componentDidUpdate`, y `componentWillUnmount` hacen en los componentes de clase.

##### Ejemplo de ciclo de vida en un componente funcional con hooks:
```javascript
import React, { useState, useEffect } from 'react';

function CicloDeVidaFuncional() {
  const [contador, setContador] = useState(0);

  // useEffect con [] simula componentDidMount
  useEffect(() => {
    console.log('Componente montado');
    
    // useEffect puede devolver una función para simular componentWillUnmount
    return () => {
      console.log('Componente desmontado');
    };
  }, []);

  // useEffect sin segundo argumento simula componentDidUpdate
  useEffect(() => {
    console.log('Contador actualizado');
  }, [contador]);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default CicloDeVidaFuncional;
```

---

### 5. Ejercicio Práctico

1. Crea un componente que tenga un contador, y utiliza el ciclo de vida para:
   - Mostrar en consola cuando el componente ha sido montado, actualizado y desmontado.
   - Desmontar el componente cuando el contador llegue a 10.
   
2. Implementa el mismo ejercicio usando un componente de clase y uno funcional, para comparar cómo se gestionan las fases del ciclo de vida en ambos.

---

### 6. Resumen

- React es una biblioteca de JavaScript centrada en la construcción de interfaces de usuario con componentes reutilizables.
- Los componentes pueden ser de clase o funcionales, y ambos siguen un ciclo de vida.
- Los componentes de clase tienen métodos como `componentDidMount` y `componentWillUnmount`, mientras que los componentes funcionales utilizan el hook `useEffect`.

### 7. Preguntas y discusión

- ¿Cuál es la diferencia clave entre `componentDidMount` y `useEffect`?
- ¿En qué casos preferirías usar un componente de clase sobre uno funcional?
