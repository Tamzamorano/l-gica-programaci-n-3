// funcion para calcular el factorial
function calcularFactorial(){
    // Obtener el número del input
    let numero = document.getElementById("numeroInput").value;
    
    // Validar que el número sea un número entero positivo
    numero = Number(numero);

    // validar que es un numero válido
    if (isNaN(numero) || numero < 0) {
        document.getElementById("resultado").innerHTML = "Error: Ingresa un número entero positivo"
        return;
    }  
    //calcular el factorial
    let factorial = 1;
    for(let i = 1; i <= numero; i++){
        factorial *= i; //para multiplicar el factorial por cada número desde el 1
    }
    // mostrar el resultado
    document.getElementById("resultado").innerHTML = `el factorial de ${numero} es: ${factorial}`;
}