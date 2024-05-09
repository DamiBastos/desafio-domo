window.onload = function(){
    console.log("En el documento");

    let services = document.getElementById("our-services")
    let card_one = document.getElementById("card-1")
    let card_two = document.getElementById("card-2")
    let card_three = document.getElementById("card-3")
    let script = document.getElementById("scriptme")

    script.addEventListener("click", function(){


        services.querySelector(".text-center").innerHTML = "Mis datos"

services.querySelector("p").innerHTML = ""

// Captura el ícono actual
var first_icon = document.querySelector("#card-1 .backicon");

// Crea un nuevo ícono con el mismo estilo y la clase backicon
var newIcon = document.createElement("i");
newIcon.classList.add("bi", "bi-person-circle", "backicon", "text-light", "rounded-circle", "bg-primary", "d-flex", "justify-content-center", "align-items-center", "card-img-top");

// Reemplaza el ícono actual con el nuevo ícono
first_icon.parentNode.replaceChild(newIcon, first_icon);

card_one.querySelector(".card-title").innerText = "Sobre mi";
card_one.querySelector(".card-text").innerText = "Soy Damián Bastos, de Vicente Lopez, Buenos Aires. 33 años, me encanta el diseño y la programación.";

///////////////card 2////////////////////

// Captura el ícono actual
var second_icon = document.querySelector("#card-2 .backicon");

// Crea un nuevo ícono con el mismo estilo y la clase backicon
var newIcon_2 = document.createElement("i");
newIcon_2.classList.add("bi", "bi-github", "backicon", "text-light", "rounded-circle", "bg-primary", "d-flex", "justify-content-center", "align-items-center", "card-img-top");

// Reemplaza el ícono actual con el nuevo ícono
second_icon.parentNode.replaceChild(newIcon_2, second_icon);

card_two.querySelector(".card-title").innerText = "Donde ver mis proyectos";
card_two.querySelector(".card-text").innerText = "Pueden pasar por mi github personal donde hay proyectos con distintos lenguajes y herramientas.";

card_two.querySelector("a").innerHTML = "GO"
card_two.querySelector("a").href = "https://github.com/DamiBastos"

///////////////card 3////////////////////

// Captura el ícono actual
var third_icon = document.querySelector("#card-3 .backicon");

// Crea un nuevo ícono con el mismo estilo y la clase backicon
var newIcon_three = document.createElement("i");
newIcon_three.classList.add("bi", "bi-linkedin", "backicon", "text-light", "rounded-circle", "bg-primary", "d-flex", "justify-content-center", "align-items-center", "card-img-top");

// Reemplaza el ícono actual con el nuevo ícono
third_icon.parentNode.replaceChild(newIcon_three, third_icon);

card_three.querySelector(".card-title").innerText = "Contactarme";
card_three.querySelector(".card-text").innerText = "Mi linkedin personal, donde pueden contactame y respondo pronto, también pueden saber más de mi.";

card_three.querySelector("a").innerHTML = "GO"
card_three.querySelector("a").href = "https://www.linkedin.com/in/damianbastos3/"



    })

}


