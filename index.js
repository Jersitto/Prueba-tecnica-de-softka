let idQuestion = 0
const list = aleatorio()
var score = 0
var scoreWrong = 0


/* Crear variables de preguntas correctas e incorrectas*/



function aleatorio() {
    const json = JSON.parse(data);
    return [...json]
        .sort(() => Math.random() > 0.5 ? 1 : -1)
}

function cargarPreguntas(idQuestion) {



    let question = list[idQuestion];
    if (question == undefined) {

        return alert("GANASTEEE!!!!")
    }
    /* Validar si no hay pregunta si la pregunta es undefined, mostrar la cantidad de preguntas correctas e incorrectas*/

    document.getElementById("categoria").innerHTML = question.category
    document.getElementById("pregunta").innerHTML = question.question
    document.getElementById("respuesta0").innerHTML = question.solutions[0].answer
    document.getElementById("respuesta1").innerHTML = question.solutions[1].answer
    document.getElementById("respuesta2").innerHTML = question.solutions[2].answer
    document.getElementById("respuesta3").innerHTML = question.solutions[3].answer


    document.getElementById("respuesta0").dataset.answer = question.solutions[0].answer
    document.getElementById("respuesta1").dataset.answer = question.solutions[1].answer
    document.getElementById("respuesta2").dataset.answer = question.solutions[2].answer
    document.getElementById("respuesta3").dataset.answer = question.solutions[3].answer

};

function validarRespuestas(userAnswer) {
    let question = list[idQuestion];
    let solutions = question.solutions.filter(solutions => solutions.answer == userAnswer)[0];

    /* cuando la pregunta es correcta sumar 1 al contador de correctas y si es incorrecta sumar 1 al contador de incorrectas*/

    if (solutions.value == true) {
        alert("Respuesta correcta")
        idQuestion++;
        score++;
        alert("tu puntuación es " + score + " puntos.");
        cargarPreguntas(idQuestion)
    } else {
        alert("Respuesta Incorrectas")
        scoreWrong++;
        alert("Tu cantidad de respuestas incorrectas es " + scoreWrong)

    }
}

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault()
});





cargarPreguntas(idQuestion);


