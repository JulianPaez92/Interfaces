var botones = document.body.querySelectorAll("button")

botones.forEach(element => {
    element.addEventListener("click", () => {
        var idImg = element.id + 'Img'
        document.getElementById(idImg).classList.toggle("oculto")
    })
})
