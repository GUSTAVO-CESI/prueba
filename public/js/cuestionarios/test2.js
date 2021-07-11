var questionBank= [
    {
        question : "Alan Mathison Turing, destacó en los campos de las matemáticas, la lógica, la computación, la filosofía y la criptografía ¿Sabes cuál de estos logros se le reconocen al científico?", 
        option : ["Asentó las bases de la informática", 
        "Es considerado el padre de las ciencias de la computación","Ambas respuestas son correctas", "Ninguna de las anteriores"],
        answer : "Ambas respuestas son correctas"
    },

    {
        question : "Respecto a inteligencia artificial el científico ideó una prueba que lleva su propio nombre conocida como el (Test de Turing) ¿Sabes en qué consiste?", 
        option : ["Es la prueba que mide la potencia de los ordenadores desde que fueron creados", "Es una prueba que pone a prueba la habilidad de una maquina para hacerse pasar por un ser humano",
         "Es una prueba que pone a prueba la habilidad de una maquina dialogar con humanos", "Todas las respuestas son correctas"],
        answer : "Es una prueba que pone a prueba la habilidad de una maquina para hacerse pasar por un ser humano"
    },

    {
        question : "Espera ¿Entonces, es esto posible?¿Ha pasado alguna vez alguna máquina el test de Turing?", 
        option : ["No, todavía han de pasar algunas años como para que la tecnología llegue a este punto", "Si de hecho hace algunos años que una máquina superó por primera vez el test de Turing", 
        "Si, pero el gobierno lo oculta", "No y eso nunca pasara"],
        answer : "Si de hecho hace algunos años que una máquina superó por primera vez el test de Turing"
    },

    {
        question : "El trabajo de Alan Turing también jugó un papel fundamental en la Segunda Guerra Mundial hasta el punto que, se dice, sin sus aportaciones no habría sido posible para los aliados ganarla. ¿Sabes por qué?", 
        option : ["Ideó el modo de descifrar los mensajes encriptados por la máquina enigma empleadas por los servicios nazis de comunicaciones", 
        "Participo en la creacion de la bomba atomica", "Construyo antenas que alertaban de ataques aereos", 
        "Ideó los sistemas de localización que permitió descubrir la posición de la potente flota de submarinos alemana"],
        answer : "Ideó el modo de descifrar los mensajes encriptados por la máquina enigma empleadas por los servicios nazis de comunicaciones"
    },

    {
        question : "Un momento ¿Pero qué hizo Turing exactamente para descifrar el funcionamiento de Enigma? Pues crear su propia máquina ¿Sabes con qué nombre la bautizaron??", 
        option : ["Bombe", "Edipo", "Esfinge", "Turing"],
        answer : "Bombe"
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'P.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Pregunta"+' '+(i+1)+' '+'de'+' '+questionBank.length;
}

function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

next.addEventListener('click',nextQuestion);


function backToQuiz(){
    location.reload();
}


function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();