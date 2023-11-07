function Check() {
    var Nombre = false;
    var Mail = false;
    var Telefono = false;
    var coment = false;
    var apellido = false;

    if (document.getElementById("Name").value == "") {
        document.getElementById("Nombre").setAttribute("style", "color: red;");
    } else {
        document.getElementById("Nombre").removeAttribute("style");
        Nombre = true;
    }

    if (document.getElementById("SurName").value == "") {
        document.getElementById("Apellido").setAttribute("style", "color: red;");
    } else {
        document.getElementById("Apellido").removeAttribute("style");
        apellido = true;
    }

    if (document.getElementById("MailDos").value == "") {
        document.getElementById("Mail").setAttribute("style", "color: red;");
    } else {
        document.getElementById("Mail").removeAttribute("style");
        Mail = true;
    }

    if (document.getElementById("Number").value == "") {
        document.getElementById("Telefono").setAttribute("style", "color: red");
    } else {
        document.getElementById("Telefono").removeAttribute("style");
        Telefono = true;
    }

    if (document.getElementById("Comment").value == "") {
        document.getElementById("coment").setAttribute("style", "color: red");
    } else {
        document.getElementById("coment").removeAttribute("style");
        coment = true;
    }

    if (Nombre && Mail && Telefono && coment && apellido) {
        var nombre = document.getElementById("Name").value;
        alert(nombre + " ya esta iniciada tu sesion");
        alert("Ya puede cerrar esta pagina");
        window.location.reload();
    }
    else {
        alert("DEBE COMPLETAR LOS CAMPOS OBLIGAORIOS");
    }
}