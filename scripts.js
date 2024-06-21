let questionText       = document.getElementById("question");
let answerOneText      = document.getElementById("answer-1");
let answerTwoText      = document.getElementById("answer-2");
let answerThreeText    = document.getElementById("answer-3");
let answerFourText     = document.getElementById("answer-4");
let scoreText          = document.getElementById("score"); 
let submitButton       = document.getElementById("submit-button"); 

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

randomQuestion();
