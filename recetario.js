console.log("Hola");

document.getElementById("Recetario").addEventListener("click", botonRecetario);
console.log("El boton funciona correctamente")


function botonRecetario () {

console.log("Boton Recetario")

    document.getElementById("Recetario").style.display = "none"
    

    var tarjeta1 = document.createElement("div");
   
    tarjeta1.setAttribute('class','tarjeta');

    tarjeta1.innerHTML = 
    "<img class='tarjeta.img' src='./img/Estofado.jpg' alt='Macarrones con atún'>" +
    "<h2> Macarrones con atún</h2>" + 
    "<p class='tiempo'> Tiempo de preparación: 30 mins</p>" +
    "<p class='preparación'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, architecto voluptatum. Deleniti, ipsam in. Incidunt adipisci, accusantium fugiat exercitationem eius saepe laudantium suscipit commodi eveniet ipsum nihil? Optio, ex hic.</p>";

    var tarjeta2 = document.createElement("div");
   
    tarjeta2.setAttribute('class','tarjeta');

    tarjeta2.innerHTML =
    "<img class='tarjeta.img' src='./img/Estofado.jpg' alt='Macarrones con atún'>" +
    "<h2> Macarrones con atún</h2>" + 
    "<p class='tiempo'> Tiempo de preparación: 30 mins</p>" +
    "<p class='preparación'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, architecto voluptatum. Deleniti, ipsam in. Incidunt adipisci, accusantium fugiat exercitationem eius saepe laudantium suscipit commodi eveniet ipsum nihil? Optio, ex hic.</p>";

    var tarjeta3 = document.createElement("div");
   
    tarjeta3.setAttribute('class','tarjeta');

    tarjeta3.innerHTML = 
    "<img class='tarjeta.img' src='./img/Estofado.jpg' alt='Macarrones con atún'>" +
    "<h2> Macarrones con atún</h2>" + 
    "<p class='tiempo'> Tiempo de preparación: 30 mins</p>" +
    "<p class='preparación'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, architecto voluptatum. Deleniti, ipsam in. Incidunt adipisci, accusantium fugiat exercitationem eius saepe laudantium suscipit commodi eveniet ipsum nihil? Optio, ex hic.</p>";

    var container = document.createElement("div");

    container.setAttribute('class', 'tarjetas');

    container.appendChild(tarjeta1);
    container.appendChild(tarjeta2);
    container.appendChild(tarjeta3);


    document.body.appendChild(container);

}

// function descubrir (tarjeta1, tarjeta2, tarjeta3){
//     this.classList.add("descubierta"); 

//     var tarjeta = [tarjeta1, tarjeta2, tarjeta3];

//     document.querySelectorAll(.tarjeta)tarjeta.forEach(function(tarjeta1, tarjeta2, tarjeta3){
//         tarjeta.addEventListener("click", descubrir);
        
//     });
// }