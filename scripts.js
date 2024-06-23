let questionText     = document.querySelector("#question");
let answerOneText    = document.querySelector("#a");
let answerTwoText    = document.querySelector("#b");
let answerThreeText  = document.querySelector("#c");
let answerFourText   = document.querySelector("#d");
let scoreText        = document.querySelector("#score"); 
let percentText      = document.querySelector("#percent");  
let allAnswerButtons = document.querySelectorAll(".answer-btn");
let userCurrentScore = 0;

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

const totalQuestions   = allQuestionsArray.length;

function randomQuestion() {
    // If the allQuestionsArray is empty, remove these elements from the DOM //
    if(allQuestionsArray.length === 0) {
        scoreText.style.color = "red";
        questionText.innerHTML = "Your final score was:";
        answerOneText.remove();
        answerTwoText.remove();
        answerThreeText.remove();
        answerFourText.remove();
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
                percentText.innerHTML = (userCurrentScore / totalQuestions * (100)).toFixed(1);
                randomQuestion();
            }

            else {
                scoreText.innerHTML = userCurrentScore;
                percentText.innerHTML = (userCurrentScore / totalQuestions * (100)).toFixed(1);
                randomQuestion();
            }
        });
    }
}

checkUserGuess();
randomQuestion();