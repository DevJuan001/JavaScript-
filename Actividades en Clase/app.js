let user = prompt("Cree su usuario");
let pass = prompt("Cree su Contraseña");
verficarTodo();

function verficarTodo(){
    let intentos1 = 0;
    let intentos2 = 0;
    let usuario = false;

    let verificarUser=prompt("Introduzca su usuario");
    while(intentos1 < 3){
        if (verificarUser == user){
            usuario=true;
            break;
        }else{
            intentos1++;
            if(intentos1 < 3){
                alert("Intente Nuevamente");
            }else{
                alert("Gracias por intentarlo");
                return;
            }
        }
    }

    if(usuario){
        while (intentos2 < 3){
            let verificarPass=prompt("Introduzca su contraseña");
            if(verificarPass == pass){
                document.write("Hola Adso");
                return;
            }else{
                intentos2++;
                if(intentos2 < 3 ){
                    alert("Intente nuevamente");
                }else{
                    alert("Muchas gracias por intentarlo");
                    return;
                }
            }
        }
    }
}