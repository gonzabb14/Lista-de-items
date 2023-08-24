const btnAdd = document.getElementById("agregar");
const btnClean = document.getElementById("limpiar");

if (localStorage.getItem("borrar") !== "asd"){
    localStorage.setItem("items", JSON.stringify([]));
} else {
    let contenedor = document.getElementById("contenedor");
    for (let i = 0; i<JSON.parse(localStorage.getItem("items")).length; i++){
        let li = document.createElement("li");
        li.innerHTML = JSON.parse(localStorage.getItem("items"))[i];
        contenedor.appendChild(li);
    }

}

btnClean.addEventListener("click", function(e){
    //vaciar array y actualiza vista
    localStorage.setItem("items", JSON.stringify([]));
    window.location.reload();
});

btnAdd.addEventListener("click", function(e){
    // Agregar elemento al array
    let arreglo = JSON.parse(localStorage.getItem("items"));
    item = document.getElementById("item").value;
    if (item !== ""){
        arreglo.push(item);
        localStorage.setItem("items", JSON.stringify(arreglo));
        // Agregar elemento a la lista
        let contenedor = document.getElementById("contenedor");
        let li = document.createElement("li");
        li.innerHTML = JSON.parse(localStorage.getItem("items"))[JSON.parse(localStorage.getItem("items")).length-1];
        contenedor.appendChild(li);
        document.getElementById("item").value = null;
        localStorage.setItem("borrar", "asd");
    }
});
