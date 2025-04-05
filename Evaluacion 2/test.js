        /*
    Cree un programa con las siguientes características
    1.	Debe tener 3 usuarios registrados guardados en un array 
    2.	Valide los usuarios con usuario y contraseña con 3 intentos 
    3.	Al ingresar debe tener las siguientes opciones sopa de letras, lista de animales, juego, registro de notas, cambio de texto, Cambiar texto de color,  lista de campos,  galería, cambiar texto con fondo de color, calculadora, par o impar 
    4.	Al seleccionar sopa de letras debe crear un array multidimensional de  0 a 6 que contenga tres palabras me muestre las palabras y después la sopa de letras completa 
    5.	Lista de animales cree un array donde me muestre un listado de 5 animales 
    6.	Juego debe acceder a adivinar el numero en 10 intentos 
    7.	Registro de notas cree un array donde me ingrese los datos de 5 materias con tres notas cada una debe verse en una tabla organizada 
    8.	Cambio de texto cree el método para que cuando de clic me cambie 2 textos 
    9.	Cambiar texto de color debe tener 3 líneas de texto y solo debe colocar de color la 1 y 3 
    10.	Debe crear un método donde al agregar un elemento me haga un listado organizado contando los campos 
    11.	Galería debe crear un método para que me cambie 4 veces la imagen 
    12.	Cambiar texto con color de fondo cree el método que cuando cambie el texto me aparezca con color de fondo
    13.	Implemente la calculadora me pregunta q operación quiero hacer si +, -, / o tabla según la opción que escoja realiza la operación si escoge tabla me pregunta la tabla que quiero q aparezca 
    14.	Par e impar es pedir un numero y decir si es par o impar 
    15.	Cada vez q de clic a un botón debe tener el método addEventListener
    16.	Todo debe estar por funciones 
    */

    let usuarios = [
        {"usuario": "sena1", "contra": "123"},
        {"usuario": "sena2", "contra": "1234"},
        {"usuario": "sena3", "contra": "12345"}
        ]

        let intentos1 = 3;
        let intentos2 = 3;

        function VerificarLogin() {
        
            document.getElementById("iniciarSesion").style.display = "block";
        
        const usuarioIngresado = document.getElementById("usuarioIngresado").value;
        const contrasenaIngresada = document.getElementById("contrasenaIngresada").value;

        const usuarioValido = usuarios.find(user =>
            user.usuario === usuarioIngresado);

            if (!usuarioValido) {
            intentos1--;
        if (intentos1 > 0) {
          alert(`Usuario incorrecto. Intentos restantes: ${intentos1}`);
        } else {
          alert("Has excedido los intentos de usuario. Acceso denegado.");
          document.getElementById("iniciarSesion").style.display = "none";
        }
        return;
      }

    if (usuarioValido.contra !== contrasenaIngresada) {
        intentos2--;
        if (intentos2 > 0) {
          alert(`Contraseña incorrecta. Intentos restantes: ${intentos2}`);
        } else {
          alert("Has excedido los intentos de contraseña. Acceso denegado.");
          document.getElementById("iniciarSesion").style.display = "none";
        }
    }else {
        opciones();
        document.getElementById("iniciarSesion").style.display = "none";
    }
}
    
    function opciones() {
    let opcion = prompt("Elija una opción: -Sopa de letras -Lista de animales -Juego -Registro de notas -Cambio de texto -Cambiar texto de color  -lista de campos  -Galería -Cambiar texto con fondo de color -Calculadora -Par o impar").toLowerCase();

    if (opcion = "sopa") {
        Sopadeletras();
    }else if (opcion = "juego") {
            Juego();
    }else if (opcion = "lista") {
        Listadeanimales();
    }else if (opcion = "notas") {
        RegistroNotas();
    }else if (opcion = "lista") {
        CambiarTexto();
    }else if (opcion = "lista") {
        CambiarcolorTexto();
    }else if (opcion = "lista") {
        ListaCampos();
    }else if (opcion = "lista") {
        Galeria();
    }else if (opcion = "lista") {
        CambiartextoconFondo();
    }else if (opcion = "lista") {
        Calculadora();
    }else if (opcion = "lista") {
        parImpar();
    }else{
        alert("Opcion no valida");
    }
}


    function Sopadeletras(){

    }

    function Listadeanimales(){

    }

    function Juego(){
        let numeroAleatorio;
        let intentos3 = 10;

        function iniciarJuego() {
            document.getElementById("juego").style.display = "block";
            numeroAleatorio = Math.floor(Math.random() * 100) + 1; 
            intentosJuego = 10; 
            document.getElementById("resultadoJuego").textContent = "";
            document.getElementById("intentosRestantes").textContent = `Intentos restantes: ${intentos3}`;
        }

        function adivinarNumero() {
            let numeroAdivinado = parseInt(document.getElementById("numeroAdivinado").value);
            intentos3--;

            if (numeroAdivinado === numeroAleatorio) {
                document.getElementById("resultadoJuego").textContent = "Adivinaste el número";
                document.getElementById("intentosRestantes").textContent = "";
            } else if (intentos3 > 0) {
                if (numeroAdivinado < numeroAleatorio) {
                    document.getElementById("resultadoJuego").textContent = "Incorrecto. El número es mayor.";
                } else {
                    document.getElementById("resultadoJuego").textContent = "Incorrecto. El número es menor.";
                }
                document.getElementById("intentosRestantes").textContent = `Te quedan ${intentos3}` ;
            } else {
                document.getElementById("resultadoJuego").textContent = `El número era ${numeroAleatorio}.`;
                document.getElementById("intentosRestantes").textContent = "";
            }

            document.getElementById("numeroAdivinado").value = "";
        }

        
    }
    
    let estudiantes = [];

    function RegistroNotas(){
        document.getElementById("registro").style.display = "block";
        let formulario = document.getElementById("formularioEstudiante");
        let listaEstudiantes = document.getElementById("listaEstudiantes");
        estudiantes.push({nombre: nombre, edad: edad, curso: curso});


        // crear un nuevo elemento li y agregarlo a la lista 
        let li = document.createElement("li");
        li.textContent = `Nombre: ${nombre}, Edad: ${edad}, Curso: ${curso}`;
        listaEstudiantes.appendChild(li);
        }

        // Escuchar el evento submit del formulario 
        formulario.addEventListener("submit", function(event){
            event.preventDefault(); // Editar el envio del formulario


        // Obtener los valores del formulario
        let nombre = document.getElementById("nombre").value;
        let edad = document.getElementById("edad").value;
        let curso = document.getElementById("curso").value;

        // Agregar el estudiante al array y mostrarlo
        AgregarEstudiante(nombre, edad, curso);

        //limpiar el formulario
        formulario.reset();
        })

    function CambiarTexto(){


    }

    function CambiarcolorTexto(){


    }

    function ListaCampos(){


    }

    function Galeria(){


    }

    function CambiartextoconFondo(){


    }

    function Calculadora(){

        Operacion=prompt("Introduzca la Operacion a realizar : -suma, -resta, -muliplicacion, -division -tabla");
            var Operacion;

            if (Operacion=="suma"){
                var num1;
                var num2;
                num1=prompt("Introduce el primer numero");
                num2=prompt("Introduce el segundo numero"); 
                var suma= parseInt(num1)+parseInt(num2);
                alert("El resultado de la suma de "+num1+" y "+num2+" es "+suma);
                
            }
            else if (Operacion=="resta"){
                var num1;
                var num2;
                num1=prompt("Introduce el primer numero");
                num2=prompt("Introduce el segundo numero"); 
                var resta=num1-num2;
                alert("El resultado de la resta de "+num1+" y "+num2+" es "+resta);

            }
            else if (Operacion=="multiplicacion"){
                
                var num1;
                var num2;
                num1=prompt("Introduce el primer numero");
                num2=prompt("Introduce el segundo numero"); 
                var multiplicacion=num1*num2;
                alert("El resultado de la multiplicacion de "+num1+" y "+num2+" es "+multiplicacion);

            }
            else if (Operacion=="division"){
                num1=prompt("Introduce el primer numero");
                num2=prompt("Introduce el segundo numero"); 
                var division=num1/num2;
                alert("El resultado de la division de "+num1+" y "+num2+" es "+division);

            }else if (Operacion=="tabla"){
                
                generartabla();

                    function generartabla(){
                    const numero = prompt("Digite el numero")
                    document.write(`<h1> Las Tablas del ${numero} son: </h1>` )
                    for (let i=1; i<=10; i++){
                        document.write(`<p>${numero} x ${i} = ${numero * i}</p>`);
                    }
                    }   
            }else{
                alert("Operacion no valida");
            }

    }

    function parImpar(){


    }
    