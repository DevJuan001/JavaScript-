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


    function botones() {
        // Ocultar todos los elementos secundarios
        const secciones = [
            "botones",
            "sopa",
            "listaAnimal",
            "juego",
            "registro",
            "cambiotexto",
            "cambiocolor",
            "listadecampos",
            "galeria",
            "cambiarTextoyFondo",
            "par"
        ];
    
        secciones.forEach(id => {
            document.getElementById(id).style.display = "none";
        });
    
        // Mostrar el contenedor de botones
        document.getElementById("botones").style.display = "block";
    }

    let usuarios = [
        {"usuario": "sena", "contra": "123"},
        {"usuario": "sena2", "contra": "1234"},
        {"usuario": "sena3", "contra": "12345"}
        ]

        let intentos1 = 3;
        let intentos2 = 3;

        function VerificarLogin() {
        
        const usuarioIngresado = document.getElementById("usuarioIngresado").value;
        const contrasenaIngresada = document.getElementById("contrasenaIngresada").value;

        const usuarioValido = usuarios.find(user =>
            user.usuario === usuarioIngresado);

            if (!usuarioValido) {
            intentos1--;
        if (intentos1 > 0) {
          alert(`Usuario incorrecto. Intentos restantes: ${intentos1}`);
        } else {
          alert("Intentos de usuario completados. Gracias por intentar.");
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
        document.getElementById("iniciarSesion").style.display = "none";
        alert("Boton Clickeado");
        botones();
}
        }


    function Sopadeletras(){

        botones();

        document.getElementById("sopa").style.display = "block";

        // Palabras a buscar ("Gato", "Perro", "Tigre")
        var Sopa = [
            ["G", "A", "T", "O", "E", "L", "P"],
            ["P", "E", "R", "R", "O", "N", "O"],
            ["T", "I", "G", "R", "E", "S", "I"],
            ["L", "E", "O", "X", "A", "S", "I"],
            ["E", "L", "E", "F", "A", "N", "U"],
            ["U", "Ñ", "P", "N", "W", "Q", "Y"]
            ["Y", "T", "Z", "X", "A", "E", "T"]
        ];

        document.getElementById("palabras").innerHTML =
        Sopa[0][0] + Sopa[0][1] + Sopa[0][2] + Sopa[0][3]+ ","+ 
        Sopa[1][0] + Sopa[1][1] + Sopa[1][2] + Sopa[1][3] + Sopa[1][4] + ","+ 
        Sopa[2][0] + Sopa[2][1] + Sopa[2][2] + Sopa[2][3] + Sopa[2][4] 

        const botonSopa = document.querySelector("#sopa button");
        botonSopa.addEventListener("click", function() {
        alert("Boton clickeado");

        const tabla = document.querySelector("#sopa table");

        // Sirve para crear las filas y columnas de la sopa de letras
        for (var i = 0; i < Sopa.length; i++) {
            const fila = document.createElement("tr");
            for (var j = 0; j < Sopa[i].length; j++) {
                const celda = document.createElement("td");
                celda.textContent = Sopa[i][j];
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }
        });
    }
        

    function Listadeanimales(){

        botones();

        let animales = ["Gato", "Perro", "Tigre", "Leon", "Elefante"];
        
        document.getElementById("listaAnimal").style.display = "block";
        
        //Obtener el elemento ul donde se insertan los animales
        let listaAnimales = document.getElementById("listaAnimales");


        // Recorrer el array y crear el elemento li para cada animal
        animales.forEach(function(animal){
        let li = document.createElement("li");
        li.textContent = animal;
        listaAnimales.appendChild(li);

    })
}

        let numeroAleatorio;
        let intentos3 = 10;

        function Juego() {

            botones();
        
            document.getElementById("juego").style.display = "block";

            const botonAdivinarNumero = document.querySelector("#juego button")
            botonAdivinarNumero.addEventListener("click", function() {
            alert("Boton clickeado");
            adivinarNumero();
            });

            numeroAleatorio = Math.floor(Math.random() * 100) + 1; 
            intentosJuego = 10; 
            document.getElementById("resultadoJuego").textContent = "";
            document.getElementById("intentosRestantes").textContent = `Intentos restantes: ${intentos3}`;
        }

        function adivinarNumero() {
            botones();
        

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

    function RegistroNotas (){

        botones();
        

        let notas = [];

        document.getElementById("registro").style.display = "block";
        document.getElementById("formulario").style.display = "block";

        const formulario = document.getElementById("formulario");

        // Escuchar el evento submit del formulario 
        formulario.addEventListener("submit", function(event){
            alert("Boton clickeado");
            event.preventDefault(); // Evitar el envio del formulario


        // Obtener los valores del formulario
        const materia = document.getElementById("materia").value;
        const nota1 = parseFloat(document.getElementById("nota1").value);
        const nota2 = parseFloat(document.getElementById("nota2").value);
        const nota3 = parseFloat(document.getElementById("nota3").value);

        notas.push({materia, nota1, nota2, nota3});

        // Sirve para crear una fila para la tabla
        const tabla = document.getElementById("tablaNotas").querySelector("tbody");
        const nuevaFila = document.createElement("tr");

        nuevaFila.innerHTML = `
        <td>${materia}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${nota3}</td>`;

        //Sirve para agregar la fila a la tabla
        tabla.appendChild(nuevaFila);
        
        //limpiar el formulario
        formulario.reset();
        });
    }

    function CambiarTexto(){

        botones();
        
        document.getElementById("cambiotexto").style.display = "block";

        const botonCambiarTexto = document.querySelector("#cambiotexto button");
        botonCambiarTexto.addEventListener("click", function() {
            alert("Boton clickeado");
            document.getElementById("Texto1").innerText="Texto Cambiado adso mixto";
            document.getElementById("Texto2").innerText="Texto Cambiado adso mixto";
        });
    }

    function CambiarcolorTexto(){

        document.getElementById("cambiocolor").style.display = "block";

        const botonCambiarColor = document.querySelector("#cambiocolor button");
        
        botonCambiarColor.addEventListener("click", function() {
            alert("Boton clickeado");
        document.querySelector(".texto1").style.color = "yellow";
        document.querySelector(".texto3").style.color = "blue";

        });
    }


    function ListaCampos(){

        botones();

        document.getElementById("listadecampos").style.display = "block";

        const botonAgregarCampo = document.querySelector("#listadecampos button");

        let i = 1; // Contador para los elementos de la lista

        botonAgregarCampo.addEventListener("click", function() {
            alert("Boton clickeado");
            const nuevoElemento = document.createElement("li");
            i++;
            nuevoElemento.textContent =  i+" Elemento";
            document.getElementById("listaCampos").appendChild(nuevoElemento);
        });
    }

    function Galeria(){

        botones();


        document.getElementById("galeria").style.display = "block";

        // Array con las direcciones de las imagenes
        const imagenes = ["img/img1.jpeg", "img/img2.jpeg", "img/img3.jpg ", "img/img4.jpg"];
        
        const botongaleria = document.querySelector("#galeria button");

        let contador = 1; // Contador para llevar el seguimiento de la imagen actual
        botongaleria.addEventListener("click", function() {
            alert("Boton clickeado");
            document.getElementById("Mimagen").setAttribute("src", imagenes[contador]);
            contador = (contador + 1) % imagenes.length;
        });
    }

    function CambiartextoconFondo(){

        botones();

        document.getElementById("cambiarTextoyFondo").style.display = "block";

        const botonCambiarTextoyFondo = document.querySelector("#cambiarTextoyFondo button");
        botonCambiarTextoyFondo.addEventListener("click", function (){
            alert("Boton clickeado");

            // cambiar el texto
            document.getElementById("texto1").innerText="Texto Cambiado adso mixto";
            document.getElementById("texto2").innerText="Texto Cambiado adso mixto";

            // cambiar el color de fondo
            document.getElementById("texto1").classList.add("resaltado")
            document.getElementById("texto2").classList.add("resaltado")
        })

    }

    function Calculadora(){

        botones();

        Operacion=prompt("Introduzca la Operacion a realizar : -suma, -resta, -muliplicacion, -division -tabla");

            var Operacion;

            if (Operacion=="suma"){
                var num1;
                var num2;
                num1=prompt("Introduce el primer numero");
                num2=prompt("Introduce el segundo numero"); 
                var suma= parseInt(num1)+parseInt(num2);
                document.getElementById("resultadoCalculadora").innerText = `El resultado de la suma de ${num1} y ${num2} es ${suma}`;
                
            }
            else if (Operacion=="resta"){
                var num1;
                var num2;
                num1=prompt("Introduce el primer numero");
                num2=prompt("Introduce el segundo numero"); 
                var resta=num1-num2;
                document.getElementById("resultadoCalculadora").innerText = `El resultado de la resta de ${num1} y ${num2} es ${resta}`;

            }
            else if (Operacion=="multiplicacion"){
                
                var num1;
                var num2;
                num1=prompt("Introduce el primer numero");
                num2=prompt("Introduce el segundo numero"); 
                var multiplicacion=num1*num2;
                document.getElementById("resultadoCalculadora").innerText = `El resultado de la multiplicacion de ${num1} y ${num2} es ${multiplicacion}`;

            }
            else if (Operacion=="division"){
                num1=prompt("Introduce el primer numero");
                num2=prompt("Introduce el segundo numero"); 
                var division=num1/num2;
                document.getElementById("resultadoCalculadora").innerText = `El resultado de la division de ${num1} y ${num2} es ${division}`;

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
                document.write("Operacion no valida");
            }

    }

    function parImpar(){

        botones();

            document.getElementById("par").style.display = "block";

            const Botonpar = document.querySelector("#par button");

            Botonpar.addEventListener("click", function() {
                alert("Boton clickeado");

                let numero = parseInt(document.getElementById("numero").value);

                if (numero % 2 === 0) {
                    document.getElementById("resultadopar").innerText=`${numero} es par`;
                } else {
                    document.getElementById("resultadopar").innerText=`${numero} es impar`;
                }
            });


    }
    