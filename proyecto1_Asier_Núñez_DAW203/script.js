// Creamos un Map para almacenar los resultados de las operaciones realizadas con identificadores únicos
let almacen = new Map();

// Variable para asignar un identificador único a cada operación realizada
let operacionId = 1;

/**
 * Función para realizar la suma de dos números.
 * Si los números son válidos, realiza la operación, guarda el resultado en el Map y lo muestra en la consola.
 */
function suma(num1, num2) {
    if (validarInput(num1, num2)) { // Valida los números de entrada
        let resultado = num1 + num2; // Realiza la suma
        almacen.set(`suma_${operacionId++}`, resultado); // Guarda el resultado en el Map con una clave única
        console.log("Resultado de la suma: " + resultado); // Muestra el resultado en consola
    }
}

/**
 * Función para realizar la resta de dos números.
 * Realiza la operación y almacena el resultado en el Map si los valores de entrada son válidos.
 */
function resta(num1, num2) {
    if (validarInput(num1, num2)) {
        let resultado = num1 - num2; // Realiza la resta
        almacen.set(`resta_${operacionId++}`, resultado); // Guarda el resultado en el Map
        console.log("Resultado de la resta: " + resultado); // Muestra el resultado en consola
    }
}

/**
 * Función para realizar la multiplicación de dos números.
 * Si los valores son válidos, realiza la multiplicación, guarda el resultado y lo muestra.
 */
function multiplicacion(num1, num2) {
    if (validarInput(num1, num2)) {
        let resultado = num1 * num2; // Realiza la multiplicación
        almacen.set(`multiplicacion_${operacionId++}`, resultado); // Guarda el resultado en el Map
        console.log("Resultado de la multiplicación: " + resultado); // Muestra el resultado en consola
    }
}

/**
 * Función para realizar la división de dos números.
 * Si los valores de entrada son válidos y el divisor no es cero, realiza la operación y almacena el resultado.
 */
function division(num1, num2) {
    if (validarInput(num1, num2)) {
        let resultado = num1 / num2; // Realiza la división
        almacen.set(`division_${operacionId++}`, resultado); // Guarda el resultado en el Map
        console.log("Resultado de la división: " + resultado); // Muestra el resultado en consola
    }
}

/**
 * Función para calcular la raíz cuadrada de un número.
 * Si el valor de entrada es válido, calcula la raíz cuadrada, la almacena y la muestra.
 */
function raiz(num1) {
    if (validarInput(num1)) { // Valida que el valor de entrada sea numérico
        let resultado = Math.sqrt(num1); // Calcula la raíz cuadrada
        almacen.set(`raiz_${operacionId++}`, resultado); // Guarda el resultado en el Map
        console.log("Resultado de la raíz cuadrada de " + num1 + ": " + resultado); // Muestra el resultado
    }
}

/**
 * Función para validar las entradas numéricas.
 * Revisa que `num1` y `num2` (si es aplicable) sean números y que `num2` no sea 0 cuando se usa en división.
 * Retorna true si ambos valores son válidos; en caso contrario, muestra un mensaje de error y retorna false.
 */
function validarInput(num1, num2 = null) {
    if (isNaN(num1) || (num2 !== null && isNaN(num2)) || (num2 === 0)) {
        console.log("Error, introduce un valor numérico válido y no dividas por 0.");
        return false; // Retorna falso si alguna entrada es inválida
    }
    return true; // Retorna verdadero si ambos números son válidos
}

/**
 * Función principal que controla la calculadora.
 * Solicita al usuario una operación y números, luego llama a la función correspondiente para realizar el cálculo.
 * Almacena los resultados de cada operación en el Map y los muestra al usuario.
 * El ciclo se repite hasta que el usuario ingresa "salida".
 */
function calculadora() {
    let operaciones; // Variable para almacenar la operación que elige el usuario
    
    // Bucle principal de la calculadora, que se repite hasta que el usuario elija "salida"
    do {
        // Solicita al usuario que introduzca la operación deseada
        operaciones = prompt("Introduce la operación a realizar (suma, resta, multiplicacion, division, raiz) o escribe 'salida' para terminar:", "Aquí");
        
        // Si el usuario elige "salida", finaliza el programa
        if (operaciones.toLowerCase() === "salida") {
            console.log("Has salido del programa."); // Muestra un mensaje de salida
            break; // Sale del bucle
        }
        
        // Solicita al usuario el primer número y lo convierte a un número de punto flotante
        let num1 = parseFloat(prompt("Introduce un número.", "Aquí por favor."));
        
        // Si la operación no es raíz cuadrada, solicita un segundo número
        let num2 = null;
        if (operaciones.toLowerCase() !== "raiz") {
            num2 = parseFloat(prompt("Introduce otro número.", "Aquí por favor."));
        }

        // Verifica el tipo de operación ingresada y llama a la función correspondiente
        switch (operaciones.toLowerCase()) {
            case "suma":
                suma(num1, num2);
                break;
            case "resta":
                resta(num1, num2);
                break;
            case "multiplicacion":
                multiplicacion(num1, num2);
                break;
            case "division":
                division(num1, num2);
                break;
            case "raiz":
                raiz(num1);
                break;
            default:
                console.log("Operación no reconocida. Por favor, introduce una operación válida."); // Mensaje de error para operaciones no válidas
        }
        
        // Muestra el contenido actual del Map `almacen` después de cada operación
        console.log("Datos almacenados: ");
        console.log(almacen); // Imprime el Map para ver todas las operaciones realizadas y sus resultados
    } while (operaciones.toLowerCase() !== "salida"); // Repite hasta que el usuario elija "salida"
    
    console.log("Programa finalizado."); // Mensaje final cuando el bucle termina
}

// Llama a la función principal para iniciar la calculadora
calculadora();
