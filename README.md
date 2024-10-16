# Encapsulamiento en Programación Orientada a Objetos

## Descripción

El **Encapsulamiento** es uno de los pilares fundamentales de la **Programación Orientada a Objetos (POO)**. Este principio establece que los detalles internos de una clase deben estar ocultos al mundo exterior, y solo se debe permitir el acceso y la manipulación de sus datos a través de métodos públicos controlados.

El objetivo principal del encapsulamiento es proteger los datos de una clase para que no sean modificados de manera inesperada, manteniendo así la integridad y coherencia del estado interno de un objeto.

## Beneficios del Encapsulamiento

1. **Protección de Datos**: Al ocultar los detalles internos de una clase, se protege su estado de modificaciones no autorizadas.
2. **Mantenibilidad**: El código es más fácil de mantener porque los cambios en la implementación interna no afectan el código que utiliza la clase.
3. **Reusabilidad**: El encapsulamiento permite crear clases que pueden ser reutilizadas sin preocuparse por la forma en que gestionan sus datos internamente.
4. **Modularidad**: Las clases encapsuladas permiten separar las responsabilidades de manera clara, lo que mejora la modularidad del código.

## Cómo Funciona el Encapsulamiento

En JavaScript, el encapsulamiento se puede lograr mediante:

- **Propiedades privadas**: Se utilizan prefijos como `_` o, en las versiones más modernas de JavaScript, el símbolo `#` para crear propiedades privadas.
- **Métodos públicos**: Se definen métodos que permiten acceder o modificar de manera controlada las propiedades internas de la clase.

## Ejemplo de Encapsulamiento en JavaScript

### Ejemplo sin Encapsulamiento

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

const persona = new Persona("Carlos", 30);
console.log(persona.nombre); // "Carlos"
persona.edad = -5; // Se puede modificar directamente, lo que puede llevar a valores inválidos
console.log(persona.edad); // "-5" (¡Esto no debería ser posible!)
````
### Ejemplo con Encapsulamiento

```javascript
class Persona {
  #nombre;
  #edad;

  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.setEdad(edad);
  }

  // Método getter para acceder al nombre
  getNombre() {
    return this.#nombre;
  }

  // Método setter para modificar el nombre
  setNombre(nombre) {
    this.#nombre = nombre;
  }

  // Método getter para la edad
  getEdad() {
    return this.#edad;
  }

  // Método setter para la edad con validación
  setEdad(edad) {
    if (edad > 0) {
      this.#edad = edad;
    } else {
      console.log("La edad debe ser mayor que 0");
    }
  }
}

const persona = new Persona("Carlos", 30);
console.log(persona.getNombre()); // "Carlos"
console.log(persona.getEdad());   // 30

persona.setEdad(-5);              // "La edad debe ser mayor que 0"
console.log(persona.getEdad());   // 30 (No permite una edad inválida)

persona.setNombre("Ana");
console.log(persona.getNombre()); // "Ana"
````
