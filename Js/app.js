//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    let opciones = document.querySelectorAll("#links  a");
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
}

//función que muestra el menu responsive
function responsiveMenu() {
    let x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = () => { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}

/* funcion para cambiar listas */

/* agrega una li */
let boton = document.getElementById("accionar");
let boton2 = document.getElementById("accionar2");
let boton3 = document.getElementById("accionar3");
let input = document.getElementById("inputUsuario");
let input2 = document.getElementById("inputUsuario2");
let input3 = document.getElementById("inputUsuario3");
let listafunc = document.querySelector("#list");
let listafunc2 = document.querySelector("#list1");
let listafunc3 = document.querySelector("#list2");
let botonDelete = document.getElementById("borrar");

/* primer info */
boton.addEventListener("click", () => {
    let nuevoli = document.createElement("li");
    let textoli = document.createTextNode(input.value);
    nuevoli.appendChild(textoli);
    listafunc.appendChild(nuevoli);
});
/* segunda info*/
boton2.addEventListener("click", () => {
    let nuevoli2 = document.createElement("li");
    let textoli2 = document.createTextNode(input2.value);
    nuevoli2.appendChild(textoli2);
    listafunc2.appendChild(nuevoli2);
});
/*tercer info*/
boton3.addEventListener("click", () => {
    let nuevoli3 = document.createElement("li");
    let textoli3 = document.createTextNode(input3.value);
    nuevoli3.appendChild(textoli3);
    listafunc3.appendChild(nuevoli3);
});

/* borra una li */
/* primer ul */
function remove_child() {
    let list = document.getElementById("list");
    let item = listafunc.lastElementChild;
    list.removeChild(item);
};
/* segunda ul */
function remove_child1() {
    let list2 = document.getElementById("list1");
    let item2 = listafunc2.lastElementChild;
    list2.removeChild(item2);
};
/* tercer ul */
function remove_child2() {
    let list3 = document.getElementById("list2");
    let item3 = listafunc3.lastElementChild;
    list3.removeChild(item3);
};

/* boton acordeon / seccion sobre mi */

let acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

// funcion para cambiar imagen

let fotoMostrada = "foto1";

function cambiarImagen() {
    let imagen = document.getElementById("foto1");
    if (fotoMostrada == "foto1") {
        imagen.src = "./Imagenes/img3.jpg";
        fotoMostrada = "img3";
    } else {
        imagen.src = "./Imagenes/perfil.jpg";
        fotoMostrada = "foto1";
    }
}



