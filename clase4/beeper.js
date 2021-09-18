var body = document.querySelector("body")

var seEjecutaEnEvento = function(){
    document.getElementById("beep").setAttribute("src", "https://c.tenor.com/-6r7FfSUDJMAAAAd/road-runner-coyote.gif")
    body.insertAdjacentHTML("beforeend", "<p>BEEP!</p>")
    body.classList.toggle("color")
}

document.getElementById("tareasad").addEventListener("click", seEjecutaEnEvento)

