let usuariosRegistrados = {};

let historialCalculos = [];

function registrarUsuario() {
  const nuevoUsuario = prompt("Ingresa el nombre de usuario que deseas registrar:");
  if (!nuevoUsuario) {
    alert("El nombre de usuario no puede estar vacío.");
    return false;
  }
  if (usuariosRegistrados[nuevoUsuario]) {
    alert(`El nombre de usuario "${nuevoUsuario}" ya está registrado. Por favor, elige otro.`);
    return false;
  }
  const nuevaContrasena = prompt("Ingresa la contraseña para tu nueva cuenta:");
  if (!nuevaContrasena) {
    alert("La contraseña no puede estar vacía.");
    return false;
  }
  usuariosRegistrados[nuevoUsuario] = nuevaContrasena;
  alert(`Usuario "${nuevoUsuario}" registrado exitosamente.`);
  console.log("Usuarios registrados:", usuariosRegistrados); 
  return true;
}

function iniciarSesion() {
  const usuarioIngresado = prompt("Ingresa tu nombre de usuario:");
  if (!usuarioIngresado) {
    alert("El nombre de usuario no puede estar vacío.");
    return false;
  }
  const contrasenaIngresada = prompt("Ingresa tu contraseña:");
  if (!contrasenaIngresada) {
    alert("La contraseña no puede estar vacía.");
    return false;
  }

  if (usuariosRegistrados[usuarioIngresado] && usuariosRegistrados[usuarioIngresado] === contrasenaIngresada) {
    alert("¡Inicio de sesión exitoso!");
    return true;
  } else {
    alert("Nombre de usuario o contraseña incorrectos.");
    return false;
  }
}

function sumar(a, b) {
  const resultado = a + b;
  console.log(`[SUMA] ${a} + ${b} = ${resultado}`);
  return resultado;
}

function restar(a, b) {
  const resultado = a - b;
  console.log(`[RESTA] ${a} - ${b} = ${resultado}`);
  return resultado;
}

function multiplicar(a, b) {
  const resultado = a * b;
  console.log(`[MULTIPLICACIÓN] ${a} * ${b} = ${resultado}`);
  return resultado;
}

function dividir(a, b) {
  let resultado;
  if (b === 0) {
    resultado = "Error: División por cero";
    console.error(`[DIVISIÓN] ${a} / ${b} = ${resultado}`);
  } else {
    resultado = a / b;
    console.log(`[DIVISIÓN] ${a} / ${b} = ${resultado}`);
  }
  return resultado;
}

function obtenerNumero(mensaje) {
  let numero = parseFloat(prompt(mensaje));
  while (isNaN(numero)) {
    alert("Entrada inválida. Por favor, ingresa un número.");
    numero = parseFloat(prompt(mensaje));
  }
  return numero;
}

function mostrarResultado(num1, operacion, num2, resultado) {
  alert(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);
  historialCalculos.push(`${num1} ${operacion} ${num2} = ${resultado}`);
}

function mostrarHistorial() {
  if (historialCalculos.length === 0) {
    alert("El historial de cálculos está vacío.");
  } else {
    alert("Historial de cálculos:\n" + historialCalculos.join('\n'));
  }
}

function calculadoraMenu() {
  alert("Bienvenido !");

  let sesionIniciada = false;
  while (!sesionIniciada) {
    const opcionInicio = prompt("¿Ya tienes una cuenta? (s/n):").toLowerCase();
    if (opcionInicio === 's') {
      sesionIniciada = iniciarSesion();
    } else if (opcionInicio === 'n') {
      registrarUsuario();
    } else {
      alert("Opción inválida. Por favor, ingresa 's' para iniciar sesión o 'n' para registrarte.");
    }
    if (sesionIniciada) {
      break;
    }
  }

  if (!sesionIniciada) {
    alert("No se ha iniciado sesión. Saliendo de la calculadora.");
    return;
  }

  let opcion;

  do {
    opcion = prompt(
      "Elige una operación:\n" +
      "1. Sumar (+)\n" +
      "2. Restar (-)\n" +
      "3. Multiplicar (*)\n" +
      "4. Dividir (/)\n" +
      "5. Ver historial de cálculos\n" +
      "6. Salir"
    );

    switch (opcion) {
      case '1':
        const numSum1 = obtenerNumero("Ingresa el primer número para sumar:");
        const numSum2 = obtenerNumero("Ingresa el segundo número para sumar:");
        const resultadoSuma = sumar(numSum1, numSum2);
        mostrarResultado(numSum1, '+', numSum2, resultadoSuma);
        break;
      case '2':
        const numRes1 = obtenerNumero("Ingresa el primer número para restar:");
        const numRes2 = obtenerNumero("Ingresa el segundo número para restar:");
        const resultadoResta = restar(numRes1, numRes2);
        mostrarResultado(numRes1, '-', numRes2, resultadoResta);
        break;
      case '3':
        const numMul1 = obtenerNumero("Ingresa el primer número para multiplicar:");
        const numMul2 = obtenerNumero("Ingresa el segundo número para multiplicar:");
        const resultadoMultiplicacion = multiplicar(numMul1, numMul2);
        mostrarResultado(numMul1, '*', numMul2, resultadoMultiplicacion);
        break;
      case '4':
        const numDiv1 = obtenerNumero("Ingresa el primer número para dividir:");
        const numDiv2 = obtenerNumero("Ingresa el segundo número para dividir:");
        const resultadoDivision = dividir(numDiv1, numDiv2);
        mostrarResultado(numDiv1, '/', numDiv2, resultadoDivision);
        break;
      case '5':
        mostrarHistorial();
        break;
      case '6':
        alert("Has salido de la calculadora!");
        break;
      default:
        alert("Opción inválida. Por favor, elige una opción del menú.");
    }
  } while (opcion !== '6');
}

calculadoraMenu();