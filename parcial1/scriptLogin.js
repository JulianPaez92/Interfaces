checkPassword = function() {
    
    var num = document.getElementById('numero').value;
    var str = document.getElementById('contra').value;
    validacionNum = /^[0-9]+$/.test(num)

    if (!validacionNum){
        alert("El DNI debe ser numérico");
        return volverALogin;
    }
    else if (num.length < 7){
        alert("El DNI debe contener entre 7 y 8 números");
        return volverALogin();
    }
    console.log("DNI Ok");

    
    if (str.length < 4) {
        alert("La contraseña debe poseer al menos 4 caracteres");
        return volverALogin();
    }
    console.log("Contraseña Ok");
    return redireccion()
    
    //return("ok");
}

redireccion = function() {
    this.location = "paginaPrincipal.html";
}
volverALogin = function(){
    this.location = "index.html"
}

document.getElementById("botonaco").addEventListener("click", (ev)=>{
    ev.preventDefault()
    checkPassword()
})
