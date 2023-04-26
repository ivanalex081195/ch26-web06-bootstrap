console.log("Hola desde un script externo");

function changeColorTo(color){
    const refName = document.getElementById("name");

    refName.style.color = color;
}

function changeColorParagraph(color, refObjs){
    refObjs.style.color = color;
}
function resetColors(){
    const colorCollection = document.getElementsByClassName("text-color");
    console.log(getElementsByClassName);
    for (let index = 0; index < colorCollection; index++) {
        const element = colorCollection[index];
        elements.style.color = "purple";   
    }
}

function changeGreeting(){
    const clientName = getNameOfclient(); // obtener nombre cliente
    const greetingReference = getReferenceOfIdGreeting(); // obtener referencia de label h1
    greetingReference.innerHTML = "Hola " + clientName + "!" + " " + "Bienvenid@ a mi Blog!";   // cambiar el saludo
}
function getNameOfclient(){
    const clientName = prompt("Escribe tu nobre");
    return clientName;
}
function getReferenceOfIdGreeting(){
    return document.getElementById("greeting");
}