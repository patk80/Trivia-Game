// let exString = "Sup Rick"
// let qVar = "?"

// function addQuestionMark(string, variable){
//     for(let i = 0; i < 10; i++){
//         console.log(string += variable);
//     }
// }

// addQuestionMark(exString, qVar);

let question    = document.getElementById("question");
let answerOne   = document.getElementById("answer-1");
let answerTwo   = document.getElementById("answer-2");
let answerThree = document.getElementById("answer-3");
let answerFour  = document.getElementById("answer-4");


let question1 = {
    question: "q1 - what is this?",
    answer1: "q1 a1",
    answer2: "q1 a2",
    answer3: "q1 a3",
    answer4: "q1 a4",
    // correctAnswer: answer3
}

question.innerHTML = question1.question;
answerOne.innerHTML = question1.answer1;
answerTwo.innerHTML = question1.answer2;
answerThree.innerHTML = question1.answer3;
answerFour.innerHTML = question1.answer4;