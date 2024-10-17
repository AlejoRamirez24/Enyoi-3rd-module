### Clase: Validadores y JWT en Express

#### 1. Introducción a Validadores en Express

##### Importancia de la validación de datos
La validación asegura que los datos recibidos por el servidor son correctos y seguros antes de procesarlos.

##### Instalación de `express-validator`
```bash
npm install express-validator
```

##### Ejemplo básico de validación
```javascript
const { check, validationResult } = require('express-validator');

app.post('/user', [
  check('email').isEmail(),
  check('password').isLength({ min: 6 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Continúa con la lógica de negocio
  res.send('Validación exitosa');
});
```

##### Ejercicio
- Crea validaciones para nombres de usuario (que sean alfanuméricos) o números de teléfono (que sigan un formato específico).

#### 2. Introducción a Express JWT para Autenticación

##### ¿Qué es JWT?
JWT (JSON Web Token) es un estándar para el intercambio seguro de información, compuesto por:
- **Header**: Información sobre el tipo de token y el algoritmo.
- **Payload**: Contiene los datos a transmitir.
- **Signature**: Verifica que el token no ha sido alterado.

##### Instalación de paquetes necesarios
```bash
npm install jsonwebtoken express-jwt
```

##### Generación de un JWT
```javascript
const jwt = require('jsonwebtoken');

app.post('/login', (req, res) => {
  const user = { id: 1, username: 'testUser' }; // Ejemplo de usuario
  const token = jwt.sign(user, 'tu_secreto', { expiresIn: '1h' });
  res.json({ token });
});
```

##### Protección de rutas con JWT
```javascript
const { expressjwt } = require('express-jwt');

app.use(expressjwt({ secret: 'tu_secreto', algorithms: ['HS256'] }));

app.get('/protected', (req, res) => {
  res.send('Esta es una ruta protegida');
});
```

##### Ejercicio
- Implementa un sistema de autenticación con JWT, donde los usuarios puedan iniciar sesión y acceder a rutas protegidas.

#### 3. Ejercicios Prácticos

##### Validación avanzada
- Crea validaciones más complejas, como contraseñas que incluyan caracteres especiales y números.

##### Implementación completa de autenticación
- Implementa un flujo de autenticación completo utilizando JWT para proteger rutas y manejar usuarios.

##### Documentación
- Documenta tus rutas y validaciones para que otros desarrolladores puedan entender tu API.

#### Recursos Adicionales
- [Documentación de express-validator](https://express-validator.github.io/docs/)
- [Documentación de JWT](https://jwt.io/introduction/)

