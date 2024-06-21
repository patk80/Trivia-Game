let questionText    = document.getElementById("question");
let answerOneText   = document.getElementById("answer-1");
let answerTwoText   = document.getElementById("answer-2");
let answerThreeText = document.getElementById("answer-3");
let answerFourText  = document.getElementById("answer-4");

let allQuestions = [
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
    }
]

questionText.innerHTML    = allQuestions[0].question;
answerOneText.innerHTML   = allQuestions[0].answers.a;
answerTwoText.innerHTML   = allQuestions[0].answers.b;
answerThreeText.innerHTML = allQuestions[0].answers.c;
answerFourText.innerHTML  = allQuestions[0].answers.d;
