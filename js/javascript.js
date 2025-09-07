formulario = document.getElementById("formulario");

formulario.addEventListener("submit",  actionFormulario);

function actionFormulario(event){
    event.preventDefault();
    alert("Gracias por rellenar la informacion");
    console.log("Se enviaron los datos");
    formulario.reset();
}