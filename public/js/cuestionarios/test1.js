var questionBank= [
    {
        question : "Vamos a empezar con algo obvio, pero que quizás no lo es tanto ¿Qué es un exoplaneta?", 
        option : ["Planetas situados más allá de nuestro sistema solar", 
        "Planetas que no giran alrededor de una estrella","Planetas que no tienen satelites", "Ninguna de las anteriores"],
        answer : "Planetas situados más allá de nuestro sistema solar"
    },

    {
        question : "Un momento, antes de seguir de hablando exoplanetas, hemos de saber las cualidades que definen a un planeta ¿Sabes cuáles son?", 
        option : ["Debe orbitar alrededor de una estrella", "Debe tener un tamaño suficiente para generar la gravedad necesaria para tener forma esférica",
         "Debe tener suficiente gravedad para mantener su órbita despejada de los objetos de similar tamaño.", "Todas las respuestas son correctas"],
        answer : "Todas las respuestas son correctas"
    },

    {
        question : "Bien, ahora que tenemos claro que son los planetas y los exoplanetas. ¿Sabes cuándo se dio cuenta la humanidad de que podían existir mundos orbitando otras estrellas distintas al Sol?", 
        option : ["Los antiguos griegos ya lo sabían", "Los griegos no lo sabían pero si la civilización maya", "Copérnico fue el primero de hablar de ello en sus escritos", 
        "Es un descubrimiento muy reciente, del siglo XX"],
        answer : "Es un descubrimiento muy reciente, del siglo XX"
    },

    {
        question : "Y desde entonces los científicos no han parado de descubrir nuevos mundos en nuestro universo. ¿Sabes cuántos exoplanetas confirmados se conocen en la actualidad?", 
        option : ["Cerca de 800", "Cerca de 4000", "Cerca de 20000", "Menos de 100"],
        answer : "Cerca de 4000"
    },

    {
        question : "Muchos de estos exoplanetas, más de la mitad, han sido descubiertos por uno de los ya legendarios telescopios de la NASA ¿Sabes de cuál se trata?", 
        option : ["Telescopio Espacial Kepler", "Telescopio Espacial Hubble", "Telescopio Espacial James Webb", "Telescopio Very Large Telescope (VLT)"],
        answer : "Telescopio Espacial Kepler"
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