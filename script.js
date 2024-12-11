const questions = [
    {
        question: "¿Cuál es la capital de Colombia?",
        options: ["Medellín", "Cali", "Bogotá", "Cartagena"],
        answer: "Bogotá"
    },
    {
        question: "¿Qué famoso río atraviesa Colombia?",
        options: ["Río Amazonas", "Río Magdalena", "Río Cauca", "Río Orinoco"],
        answer: "Río Magdalena"
    },
    {
        question: "¿Cuál es el plato típico de Colombia que se elabora con arroz, frijoles y carne?",
        options: ["Bandeja paisa", "Ajiaco", "Sancocho", "Tamales"],
        answer: "Bandeja paisa"
    },
    {
        question: "¿Qué ciudad es conocida como la 'Ciudad de la Eterna Primavera'?",
        options: ["Cali", "Medellín", "Barranquilla", "Bucaramanga"],
        answer: "Medellín"
    },
    {
        question: "¿Cuál es el baile típico de la región del Caribe colombiano?",
        options: ["Cumbia", "Salsa", "Bachata", "Vallenato"],
        answer: "Cumbia"
    },
    {
        question: "¿Qué famoso escritor colombiano ganó el Premio Nobel de Literatura en 1982?",
        options: ["Gabriel García Márquez", "Jorge Luis Borges", "Mario Vargas Llosa", "Pablo Neruda"],
        answer: "Gabriel García Márquez"
    },
    {
        question: "¿Cuál es el festival más importante de Barranquilla?",
        options: ["Feria de las Flores", "Carnaval de Barranquilla", "Feria de Cali", "Festival de la Leyenda Vallenata"],
        answer: "Carnaval de Barranquilla"
    },
    {
        question: "¿Qué café colombiano es famoso en todo el mundo?",
        options: ["Café de Medellín", "Café de Bogotá", "Café de Caldas", "Café de Quindío"],
        answer: "Café de Caldas"
    },
    {
        question: "¿Cuál es el símbolo nacional de Colombia que representa la libertad?",
        options: ["El cóndor", "El jaguar", "El águila", "El delfín"],
        answer: "El cóndor"
    },
    {
        question: "¿Qué parque nacional colombiano es famoso por sus paisajes de páramo?",
        options: ["Parque Nacional Tayrona", "Parque Nacional Los Nevados", "Parque Nacional Chiribiquete", "Parque Nacional El Cocuy"],
        answer: "Parque Nacional Los Nevados"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => selectAnswer(option); // Al hacer clic, llama a selectAnswer
        optionsContainer.appendChild(button);
    });
    document.getElementById('feedback-message').textContent = ''; // Limpia el mensaje de feedback al cargar una nueva pregunta
}

function selectAnswer(option) {
    const currentQuestion = questions[currentQuestionIndex];
    const feedbackMessage = document.getElementById('feedback-message'); // Obtén el elemento div para mostrar el mensaje

    if (option === currentQuestion.answer) {
        score++;
        feedbackMessage.textContent = "¡Correcto!"; // Muestra el mensaje de correcto
        feedbackMessage.style.color = "green"; // Cambia el color del texto a verde
    } else {
        feedbackMessage.textContent = "Incorrecto. La respuesta correcta era: " + currentQuestion.answer; // Muestra el mensaje de incorrecto
        feedbackMessage.style.color = "red"; // Cambia el color del texto a rojo
    }

    currentQuestionIndex++;
    setTimeout(() => { // Espera 1 segundo antes de cargar la siguiente pregunta
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showScore();
        }
    }, 1000); // 1000 ms = 1 segundo
}

function showScore() {
    document.getElementById("quiz-container").innerHTML = `<h2>Tu puntuación es: ${score} de ${questions.length}</h2>`;
}

loadQuestion();