// Función para validar el formato del email usando una expresión regular
function validateEmailAddress(email) {
    var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(email); 
}

function validate() {
    $("#result").text(""); // limpia cualquier mensaje previo

    var emailaddress = $("#email").val(); // obtiene lo que escribió el usuario

    if (validateEmailAddress(emailaddress)) { 
        // Si el email es válido
        $("#result").text(emailaddress + " is valid :)");
        $("#result").css("color", "green"); 
    } else { 
        // Si el email es inválido
        $("#result").text(emailaddress + " is not correct, please retry :(");
        $("#result").css("color", "red"); 
    }

    return false; // evita que el formulario recargue la página
}

// Enlazar el botón con id="validate" para que ejecute la función validate()
$("#validate").bind("click", validate);
