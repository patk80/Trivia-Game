let questionText       = document.querySelector("#question");
let answerOneText      = document.querySelector("#answer-1");
let answerTwoText      = document.querySelector("#answer-2");
let answerThreeText    = document.querySelector("#answer-3");
let answerFourText     = document.querySelector("#answer-4");
let scoreText          = document.querySelector("#score"); 
let submitButton       = document.querySelector("#submit-button"); 
let allButtons         = document.querySelectorAll(".btn");

let allQuestionsArray = [
    {
        question: "q1 - what is this?",
        answers: {
            a: "q1 a1",
            b: "q1 a2",
            c: "q1 a3",
            d: "q1 a4",
        },
        correctAnswer: 'c'
    },
    {
        question: "q2 - wsdjsdjlsjdldksd?",
        answers: {
            a: "q2 a1",
            b: "q2 a2",
            c: "q2 a3",
            d: "q2 a4",
            },
            correctAnswer: 'd'
    },
    {
        question: "q3 - WOLOLO!!!",
        answers: {
            a: "q3 a1",
            b: "q3 a2",
            c: "q3 a3",
            d: "q3 a4",
            },
            correctAnswer: 'd'
        }
];

function randomQuestion() {
    let randomIndex = Math.floor( Math.random() * (allQuestionsArray.length) );
    questionText.innerHTML    = allQuestionsArray[randomIndex].question;
    answerOneText.innerHTML   = allQuestionsArray[randomIndex].answers.a;
    answerTwoText.innerHTML   = allQuestionsArray[randomIndex].answers.b;
    answerThreeText.innerHTML = allQuestionsArray[randomIndex].answers.c;
    answerFourText.innerHTML  = allQuestionsArray[randomIndex].answers.d;
    // remove current question from allQuestionsArray with splice //
    allQuestionsArray.splice([randomIndex], 1);
}

// Messing around with selected item by user //
answerOneText.addEventListener("click", function() {
    answerOneText.style.color = "magenta";
    answerOneText.style.fontWeight = 'bold';
});

answerTwoText.addEventListener("click", function() {
    answerTwoText.style.color = "yellow";
    answerTwoText.style.fontWeight = 'bold';
});

answerThreeText.addEventListener("click", function() {
    answerThreeText.style.color = "red";
    answerThreeText.style.fontWeight = 'bold';
});

answerFourText.addEventListener("click", function() {
    answerFourText.style.color = "blue";
    answerFourText.style.fontWeight = 'bold';
});


randomQuestion();
