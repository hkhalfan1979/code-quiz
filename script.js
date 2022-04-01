console.log("script connected");

var questions = [{
     title: "question placeholder 1?",
     choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
     answer: "Answer D"
 },
 {
     title: "question placeholder 2?",
     choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
     answer: "Answer A"
 },
 {
     title: "question placeholder 3?",
     choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
     answer: "Answer B"
 },
 {
     title: "question placeholder 4?",
     choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
     answer: "Answer C"
 },
 {
     title: "question placeholder 5?",
     choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
     answer: "Answer A"
 }
]
console.log(questions);

//Timer variables
var timeLeft = 0;
var timer;

//on click start timer. 
function start() {

    timeLeft = 100;
    document.getElementById("timer").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").innerHTML = timeLeft;
       
    }, 1000);
}