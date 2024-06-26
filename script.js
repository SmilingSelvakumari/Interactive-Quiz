document.getElementById("submitbtn").addEventListener("click", function () {
    showResult();
});

function showResult() {
    // Check if all questions are answered
    if (!areAllQuestionsAnswered()) {
        alert("Please answer all questions before submitting.");

    }

    //Ensures all questions have been answered before calculating and displaying the result.

    function areAllQuestionsAnswered() {

        var questionInputs = document.querySelectorAll('input[type="radio"]:checked');
        var totalQuestions = document.querySelectorAll('.questions').length;

        return questionInputs.length === totalQuestions;
    }

    // Calculate the score based on user's answers
    var score = calculateScore();

    function calculateScore() {
        var score = 0;

        if (document.querySelector('input[name="Ques1"]:checked')?.value === "Paris") {
            score++;
        }
        if (document.querySelector('input[name="Ques2"]:checked')?.value === "Mars") {
            score++;
        }
        if (document.querySelector('input[name="Ques3"]:checked')?.value === "William Shakespeare") {
            score++;
        }
        if (document.querySelector('input[name="Ques4"]:checked')?.value === "Japan") {
            score++;
        }
        if (document.querySelector('input[name="Ques5"]:checked')?.value === "Pacific Ocean") {
            score++;
        }

        return score;
    }


    // Display result
    var scoreDisplay = document.getElementById("scoreDisplay");
    scoreDisplay.textContent = "Your score: " + score;

    // Show the result container and hide the quiz container
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";
}


