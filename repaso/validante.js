checkPassword = function() {
    
    var str = document.getElementById('contra').value;
    if (str.length < 6) {
        alert("Debe poseer al menos 6 caracteres");
        return("too_short");
    } else if (str.length > 50) {
        alert("No debe poseer mas de 50 caracteres");
        return("too_long");
    } else if (str.search(/\d/) == -1) {
        alert("Debe poseer al menos un número");
        return("no_num");
    } else if (str.search(/[a-zA-Z]/) == -1) {
        alert("Debe poseer al menos 1 letra");
        return("no_letter");
    } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) != -1) {
        alert("Debe poseer caracteres válidos");
        return("bad_char");
    }
    redireccion()
    alert("oukey!!");
}

redireccion = function() {
    window.location = "misSolicitudes.html";
}

document.getElementById("botonaco").addEventListener("click", checkPassword)
