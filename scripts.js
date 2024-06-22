let questionText     = document.querySelector("#question");
let answerOneText    = document.querySelector("#answer-a");
let answerTwoText    = document.querySelector("#answer-b");
let answerThreeText  = document.querySelector("#answer-c");
let answerFourText   = document.querySelector("#answer-d");
let scoreText        = document.querySelector("#score"); 
let submitButton     = document.querySelector("#submit-button"); 
let allAnswerButtons = document.querySelectorAll(".answer-btn");

let allQuestionsArray = [
    {
        question: "q1 - what is this?",
        answers: {
            a: "q1 wrong 1",
            b: "q1 wrong 2",
            c: "q1 CORRECT",
            d: "q1 wrong 3",
        },
        correctAnswer: "c"
    },
    {
        question: "q2 - wsdjsdjlsjdldksd?",
        answers: {
            a: "q2 wrong 1",
            b: "q2 wrong 2",
            c: "q2 wrong 3",
            d: "q2 CORRECT",
            },
            correctAnswer: "d"
    },
    {
        question: "q3 - WOLOLO!!!",
        answers: {
            a: "q3 CORRECT",
            b: "q3 wrong 1",
            c: "q3 wrong 2",
            d: "q3 wrong 3",
            },
            correctAnswer: "a"
        }
];

function randomQuestion() {
    let randomIndex = Math.floor( Math.random() * (allQuestionsArray.length) );
    questionText.innerHTML    = allQuestionsArray[randomIndex].question;
    answerOneText.innerHTML   = allQuestionsArray[randomIndex].answers.a;
    answerTwoText.innerHTML   = allQuestionsArray[randomIndex].answers.b;
    answerThreeText.innerHTML = allQuestionsArray[randomIndex].answers.c;
    answerFourText.innerHTML  = allQuestionsArray[randomIndex].answers.d;


    console.log("************ from randomQuestionsArray");
    console.log(allQuestionsArray[randomIndex].correctAnswer);
    console.log("************ from randomQuestionsArray");
    // remove current question from allQuestionsArray with splice //
    allQuestionsArray.splice([randomIndex], 1);
}

// Messing around with selected item by user //
// answerOneText.addEventListener("click", function() {
//     answerOneText.style.color = "magenta";
//     answerOneText.style.fontWeight = 'bold';
// });

// answerTwoText.addEventListener("click", function() {
//     answerTwoText.style.color = "yellow";
//     answerTwoText.style.fontWeight = 'bold';
// });

// answerThreeText.addEventListener("click", function() {
//     answerThreeText.style.color = "red";
//     answerThreeText.style.fontWeight = 'bold';
// });

// answerFourText.addEventListener("click", function() {
//     answerFourText.style.color = "blue";
//     answerFourText.style.fontWeight = 'bold';
// });


function userGuess(){
    for(i of allAnswerButtons) {
        i.addEventListener("click", function(){
            console.log(this.id);
        });
    }
}
userGuess();


randomQuestion();
