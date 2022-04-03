console.log("script connected");

//arrray of the quiz questions, avaialble choices, and correct answers
var questions = [{
    title: "What built in javascript method returns the length of the string?",
    choices: ["Concat()", "indexOf()", "length()", "reverse()"],
    answer: "length()"
},
{
    title: "NaN is a short form of?",
    choices: ["Not a Number", "undefined", "Not a Value", "error"],
    answer: "Not a Number"
},
{
    title: "What link html attribute will open a link in a new window?",
    choices: ["_self", "_blank", "_top", "_parent"],
    answer: "_blank"
},
{
    title: "What of the following is not a JavaScript Data types?",
    choices: ["string", "boolean", "integer", "arr"],
    answer: "arr"
},
{
    title: "How do you create an array in JavaScript??",
    choices: ["var a = {}", "var a = ()", "var a = ({})", "var a = []"],
    answer: "var a = []"
}
]
console.log(questions);


// Decalaring
var timeLeft = 0;
var timer;
var score = 0;
var currentQuestion = -1;


//Starts timer on button click
function start() {

 timeLeft = 75;
 document.getElementById("quizTimer").innerHTML = timeLeft;

 timer = setInterval(function() {
     timeLeft--;
     document.getElementById("quizTimer").innerHTML = timeLeft;
     //proceed to end the game function when timer is below 0 at any time
     if (timeLeft <= 0) {
         clearInterval(timer);
         endGame();
     }
 }, 1000);

 next();
}

// Function stop the timer to end the game
function endGame() {
    clearInterval(timer);

    var quizContent = `
         <div class="quiz-content">
             <p>Game over!</p>
             <p>You're score is ` + score +  ` /100!</p>
             <p>You got ` + score / 20 +  ` questions correct!</p>
             <input type="text" id="name" placeholder="Enter Name or Initial">
             <button onclick="setScore()">Save score!</button>
        </div>
    `;

 document.getElementById("quiz-area").innerHTML = quizContent;
}

// Function stored to localstorage
function setScore() {
 localStorage.setItem("highscore", score);
 localStorage.setItem("highscorerName",  document.getElementById('name').value);
 getScore();
}


function getScore() {
    var quizContent = `
    <div class="quiz-content">
         <p>` + localStorage.getItem("highscorerName") + `'s highscore is: ` + localStorage.getItem("highscore") + `</p>

         <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Try Again!</button>
    </div>
    `;

    document.getElementById("quiz-area").innerHTML = quizContent;
}

// Function clears all score data from local storage
function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscorerName",  "");

    resetGame();
}

// Function resets the game
function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById("quizTimer").innerHTML = timeLeft;

    var quizContent = `
    <div class="quiz-content">
        <p>Re-take the Code Quiz!</p>
        <button id="start-btn" onclick="start()">Start Again!</button>
    </div>
    `;

    document.getElementById("quiz-area").innerHTML = quizContent;
}

//-15 points for incorrect answer
function incorrect() {
    timeLeft -= 15;
    next();
}

// +20 points for correct answer
function correct() {
    score += 20;
    next();
}

// Function loops through all the questions and asnwers
function next() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }

    var quizContent = "<p>" + questions[currentQuestion].title + "</p>"

    for (var answers = 0; answers < questions[currentQuestion].choices.length; answers++) {
        var addAnswer = "<button onclick=\"[ANS]\">[CHOICE]</button>";
        addAnswer = addAnswer.replace("[CHOICE]", questions[currentQuestion].choices[answers]);
            if (questions[currentQuestion].choices[answers] == questions[currentQuestion].answer) {
            addAnswer = addAnswer.replace("[ANS]", "correct()");
            } else {
            addAnswer = addAnswer.replace("[ANS]", "incorrect()");
            }
            quizContent += addAnswer
    }
    document.getElementById("quiz-area").innerHTML = quizContent;
}
