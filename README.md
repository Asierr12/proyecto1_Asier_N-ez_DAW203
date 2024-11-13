# proyecto1_Asier_N-ez_DAW203
# Calculadora Interactiva en JavaScript

Este proyecto es una calculadora básica que permite realizar operaciones aritméticas y ver el historial de operaciones. Incluye una interfaz de consola en la que el usuario puede introducir dos números y un tipo de operación para obtener el resultado.

## Funcionalidades

La calculadora permite realizar las siguientes operaciones:
- **Suma (+)**: Suma de dos números.
- **Resta (-)**: Resta de dos números.
- **Multiplicación (*)**: Multiplicación de dos números.
- **División (/)**: División de dos números (con manejo de errores en caso de división por cero).
- **Raíz Cuadrada (r)**: Calcula la raíz cuadrada del primer número (maneja el error si el número es negativo).
- **Historial (h)**: Muestra el historial de operaciones realizadas.
- **Salir (s)**: Permite salir del programa.

## Estructura del Código

### Variables
- `num1` y `num2`: Números introducidos por el usuario.
- `tipoOperacion`: Operación seleccionada por el usuario.
- `resultado`: Resultado de la operación actual.
- `historial`: Almacena el historial de operaciones en un `Map`, donde se guardan tanto los resultados como el tipo de operación realizada.

### Funciones

- **sumar(num1, num2)**: Retorna la suma de los dos números.
- **restar(num1, num2)**: Retorna la resta del segundo número al primero.
- **multiplicar(num1, num2)**: Retorna el producto de los dos números.
- **dividir(num1, num2)**: Retorna el resultado de dividir el primer número por el segundo o un mensaje de error si el segundo número es cero.
- **raiz(num1)**: Retorna la raíz cuadrada del número o un mensaje de error si el número es negativo.
- **mostrarHistorial()**: Muestra el historial de operaciones en la consola.
- **validarInput(numero)**: Valida que el input sea un número.

### Función Principal
- **calculadora()**: Controla el flujo del programa, solicitando inputs al usuario, validando entradas y llamando a las funciones correspondientes según el tipo de operación.

## Ejecución del Proyecto

1. Asegúrate de tener un entorno para ejecutar JavaScript (como un navegador o Node.js).
2. Copia el código en un archivo `.js`.
3. Abre la consola y ejecuta el archivo. La calculadora te guiará en cada paso.

## Ejemplo de Uso

1. Ejecuta el archivo y sigue las instrucciones en la consola.
2. Introduce dos números y selecciona la operación.
3. Visualiza el resultado y el historial, o elige salir de la calculadora.

**Ejemplo de ejecución en consola:**

Introduce la operación a realizar (suma, resta, multiplicacion, division, raiz) o escribe 'salida' para terminar: suma
Introduce un número: 10
Introduce otro número: 5
Resultado de la suma: 15
Datos almacenados: Map { "suma_1" => 15 }

Introduce la operación a realizar (suma, resta, multiplicacion, division, raiz) o escribe 'salida' para terminar: division
Introduce un número: 10
Introduce otro número: 0
Error, introduce un valor numérico y no dividas por 0
Introduce un número: 10
Introduce otro número: 5
Resultado de la división: 2
Datos almacenados: Map { "suma_1" => 15, "division_2" => 2 }

Introduce la operación a realizar (suma, resta, multiplicacion, division, raiz) o escribe 'salida' para terminar: salida
Has salido del programa.
Programa finalizado.
