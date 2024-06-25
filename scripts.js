let questionText              = document.querySelector("#question");
let answerOneText             = document.querySelector("#a");
let answerTwoText             = document.querySelector("#b");
let answerThreeText           = document.querySelector("#c");
let answerFourText            = document.querySelector("#d");
let scoreText                 = document.querySelector("#score"); 
let percentText               = document.querySelector("#percent");   
let allAnswerButtons          = document.querySelectorAll(".answer-btn");
let currentQuestionNumberText = document.querySelector("#current-question-number"); 
let totalQuestionNumberText   = document.querySelector("#total-quesions-number"); 
let previousQuestionHeading   = document.querySelector("#previous-question-and-answer-heading");  
let previousQuestionText      = document.querySelector("#previous-question");  
let previousAnswerText        = document.querySelector("#previous-answer");
let userCurrentScore          = 0;
let previousQuestionArray     = [];
let previousAnswerArray       = [];

let allQuestionsArray = [
    {
        question: "Who gave the U.S. The Statue of Liberty?",
        answers: {
            a: "Strong Quantity Language",
            b: "Structured Question Language",
            c: "Structured Query Language",
            d: "Strong Qualitative Language",
        },
        correctAnswer: "c",
        correctAnswerText: "Structured Query Language"
    },
    {
        question: "Which SQL statement is used to extract data from a database?",
        answers: {
            a: "EXTRACT",
            b: "GET",
            c: "OPEN",
            d: "SELECT",
            },
            correctAnswer: "d",
            correctAnswerText: "SELECT"
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
        },
        {
        question: "What does a barometer measure?",
        answers: {
            a: "Sound",
            b: "Light",
            c: "Atmospheric Pressure",
            d: "Humidity",
            },
            correctAnswer: "c",
            correctAnswerText: "Atmospheric Pressure"
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
                userCurrentScore++;
                scoreText.innerHTML = userCurrentScore;
                percentText.innerHTML = (userCurrentScore / totalQuestions * (100)).toFixed(1) + "%";
                previousQuestionText.classList.add("correct");
                previousQuestionText.innerHTML = "You got the previous question correct!";
                previousAnswerText.innerHTML = "";
                previousQuestionHeading.innerHTML = "";
                currentQuestionNumber++;
                currentQuestionNumberText.innerHTML = currentQuestionNumber;
                randomQuestion();
            }
            else {
                scoreText.innerHTML = userCurrentScore;
                percentText.innerHTML = (userCurrentScore / totalQuestions * (100)).toFixed(1) + "%";
                previousQuestionText.innerHTML = previousQuestionArray[previousQuestionArray.length - 1];
                previousAnswerText.innerHTML = previousAnswerArray[previousAnswerArray.length - 1];
                previousQuestionText.classList.remove("correct");
                currentQuestionNumber++;
                currentQuestionNumberText.innerHTML = currentQuestionNumber;
                previousQuestionHeading.innerHTML = "The previous question and answer were:"
                randomQuestion();
            }
        });
    }
}

checkUserGuess();
randomQuestion();