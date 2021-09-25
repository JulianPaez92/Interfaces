checkPassword = function() {
    
    var num = document.getElementById('numero').value;
    var str = document.getElementById('contra').value;
    if (num.length < 7){
        alert("El DNI debe contener entre 7 y 8 números");
        return volverALogin();
    }
    else if (Number.isInteger(num)){
        alert("El DNI debe ser un número ");
        return volverALogin();
    }
    console.log("DNI Ok");

    
    if (str.length < 4) {
        alert("La contraseña debe poseer al menos 4 caracteres");
        return volverALogin();
    }
    console.log("Contraseña Ok");
    return redireccion()

}

redireccion = function() {
    this.location = "paginaPrincipal.html";
}
volverALogin = function(){
    this.location = "login.html"
}

document.getElementById("botonaco").addEventListener("click", (ev)=>{
    ev.preventDefault()
    checkPassword()
})
