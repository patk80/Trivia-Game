let questionText     = document.querySelector("#question");
let answerOneText    = document.querySelector("#a");
let answerTwoText    = document.querySelector("#b");
let answerThreeText  = document.querySelector("#c");
let answerFourText   = document.querySelector("#d");
let scoreText        = document.querySelector("#score"); 
let percentText      = document.querySelector("#percent");   
let allAnswerButtons = document.querySelectorAll(".answer-btn");
let userCurrentScore = 0;

let currentQuestionNumberText  = document.querySelector("#current-question-number"); 
let totalQuestionNumberText   = document.querySelector("#total-quesions-number"); 
let previousQuestionText  = document.querySelector("#previous-question");  
let previousAnswerText    = document.querySelector("#previous-answer"); 
let previousQuestionArray = [];
let previousAnswerArray   = [];

let allQuestionsArray = [
    {
        question: "Who gave the U.S. The Statue of Liberty?",
        answers: {
            a: "Austria",
            b: "Germany",
            c: "France",
            d: "Spain",
        },
        correctAnswer: "c",
        correctAnswerText: "France"
    },
    {
        question: "Which U.S. state is home to Acadia National Park?",
        answers: {
            a: "California",
            b: "Vermont",
            c: "Oregon",
            d: "Maine",
            },
            correctAnswer: "d",
            correctAnswerText: "Maine"
    },
    {
        question: "There are four original colors of Starburst candy: red, orange, yellow, and...?",
        answers: {
            a: "Pink",
            b: "Blue",
            c: "Green",
            d: "Purple",
            },
            correctAnswer: "a",
            correctAnswerText: "Pink"
        }
];

const totalQuestions   = allQuestionsArray.length;
totalQuestionNumberText.innerHTML = allQuestionsArray.length;
let currentQuestionNumber = 1;
currentQuestionNumberText.innerHTML = currentQuestionNumber;

function randomQuestion() {
    // If the allQuestionsArray is empty, remove these elements from the DOM //
    if(allQuestionsArray.length === 0) {
        scoreText.style.color = "green";
        questionText.innerHTML = "Your final score was:";
        answerOneText.remove();
        answerTwoText.remove();
        answerThreeText.remove();
        answerFourText.remove();
        currentQuestionNumber--;
        currentQuestionNumberText.innerHTML = currentQuestionNumber;
    }
    // If the allQuestionsArray is not empty, put a random question on the screen //
    else {
        let randomIndex = Math.floor( Math.random() * (allQuestionsArray.length) );

        
        // Update DOM with randomized question/anwers from allQuestionsArray //
        questionText.innerHTML    = allQuestionsArray[randomIndex].question;
        answerOneText.innerHTML   = allQuestionsArray[randomIndex].answers.a;
        answerTwoText.innerHTML   = allQuestionsArray[randomIndex].answers.b;
        answerThreeText.innerHTML = allQuestionsArray[randomIndex].answers.c;
        answerFourText.innerHTML  = allQuestionsArray[randomIndex].answers.d;
        rightAnswer               = allQuestionsArray[randomIndex].correctAnswer;
        // add current question and answer into previousQuestionArray //
        previousQuestionArray.push(allQuestionsArray[randomIndex].question);
        previousAnswerArray.push(allQuestionsArray[randomIndex].correctAnswerText);
        // remove current question from allQuestionsArray with splice //
        allQuestionsArray.splice([randomIndex], 1);
        return rightAnswer;
    }
}

function checkUserGuess() {
    for(i of allAnswerButtons) {
        i.addEventListener("click", function() {

            if(this.id === rightAnswer) {
                console.log("YOUR ANSWER MATCHES THE RIGHT ONE");
                userCurrentScore++;
                scoreText.innerHTML = userCurrentScore;
                percentText.innerHTML = (userCurrentScore / totalQuestions * (100)).toFixed(1) + "%";
                previousQuestionText.innerHTML = "You got the last question correct!";
                previousAnswerText.innerHTML = "";
                currentQuestionNumber++;
                currentQuestionNumberText.innerHTML = currentQuestionNumber;
                randomQuestion();
            }

            else {
                console.log("your guess was wrong");
                scoreText.innerHTML = userCurrentScore;
                percentText.innerHTML = (userCurrentScore / totalQuestions * (100)).toFixed(1) + "%";
                previousQuestionText.innerHTML = previousQuestionArray[previousQuestionArray.length - 1];
                previousAnswerText.innerHTML = previousAnswerArray[previousAnswerArray.length - 1];
                currentQuestionNumber++;
                currentQuestionNumberText.innerHTML = currentQuestionNumber;
                randomQuestion();
            }
        });
    }
}

checkUserGuess();
randomQuestion();