let quizData = null;
let currentQuizIndex = 0;
let hintData = "";
let correctAnswer = 0;
let questionDifficulty = "";
let currQuestion = "";
let topic = "";

$(document).ready(function () {
    $("#quiz-credit-value").text(getCredits());

    const params = new URLSearchParams(window.location.search);
    topic = params.get('topic'); //topic wird geholt

    //sucht das passende Quiz in der JSON
    $.getJSON("storage/questions.json", function (data) {
        //prüft ob das Quiz existiert
        if (!data[topic]) {
            $("#questions").html("<h2>Dieses Quiz existiert nicht</h2>")
        }

        //Fragestellung, Antworten und Position der korrekten Antwort erhalten
        quizData = data[topic];
        currentQuizIndex = 0;
        showQuestion(currentQuizIndex);
    });

    //Listener für Grundfunktionalität der Buttons
    $("#grid-hint-card").click(function () {
        calcHint();
        hintToast()
    })
    $(".grid-answer-card").click(function () {
        checkAnswer(this, correctAnswer, questionDifficulty);
    })
});

//Zeigt die nächste Frage nach Beantwortung an
function showQuestion(index) {
    //Überspringe abgeschlossene Fragen
    while (index < quizData["questions"].length && getSolvedQuestions().includes(quizData["questions"][index].question)) {
        index++;
    }
    if (index >= quizData.questions.length) {
        $("#quiz-main").html("<h2>Lektion abgeschlossen</h2>");
        return;
    }

    currentQuizIndex = index;

    const questionData = quizData["questions"][index];
    const answerData = [questionData["answers"][0], questionData["answers"][1], questionData["answers"][2]];
    correctAnswer = questionData["correct"];
    hintData = questionData["hint"];
    questionDifficulty = questionData["difficulty"];
    currQuestion = questionData.question;

    //Texte setzten
    const formattedTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
    $("#quiz-title").text(formattedTopic);
    $("#grid-question-card").text(questionData.question);
    $("#a1").text(answerData[0]);
    $("#a2").text(answerData[1]);
    $("#a3").text(answerData[2]);

    $(".grid-answer-card").off("click").on("click", function () {
        checkAnswer(this, correctAnswer, questionDifficulty);
    })
}

//Überprüft ob die Antwort korrekt ist
function checkAnswer(answerObj, correctAnswer) {
    let numAnswer = answerObj.id.charAt(1) - 1;
    //:root Farben
    let backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--background-color");
    let successColor = getComputedStyle(document.documentElement).getPropertyValue("--success-color");
    let errorColor = getComputedStyle(document.documentElement).getPropertyValue("--error-color");
    //Farben + Animation
    if (parseInt(correctAnswer) === parseInt(numAnswer)) {
        $(".grid-answer-card").off("click");
        $("#"+answerObj.id).animate({
            backgroundColor: successColor
        },400)
        setTimeout(function () {
            $("#"+answerObj.id).animate({
                backgroundColor: backgroundColor
            }, 400)
        }, 1000)

        let res;
        if (addSolvedQuestion(currQuestion)) {

            //Auszahlung nach Schwierigkeit
            let value = 0;
            switch (questionDifficulty) {
                case "easy":
                    value = 10;
                    res = addCredits(value);
                    break;
                case "medium":
                    value = 20;
                    res = addCredits(value);
                    break;
                case "hard":
                    value = 30;
                    res = addCredits(value);
                    break;
                default:
                    break;
            }
        }

        res = getCredits();
        updateCreditsUI(res);

        //nächste Frage
        setTimeout(function () {
            currentQuizIndex++;
            showQuestion(currentQuizIndex);
        },1500);
    }
    else {
        //Farben + Animation
        $("#"+answerObj.id).animate({
            backgroundColor: errorColor
        }, 400)
        setTimeout(function () {
            $("#"+answerObj.id).animate({
                backgroundColor: backgroundColor
            }, 400)
        }, 1000)
    }
}

//Zieht Credits beim Tipp kauf ab
function calcHint() {
    if (addBuyedHints(hintData)) {

        let res;
        let value = 0;
        switch (questionDifficulty) {
            case "easy":
                value = 5;
                res = removeCredits(value)
                break;
            case "medium":
                value = 10;
                res = removeCredits(value);
                break;
            case "hard":
                value = 15;
                res = removeCredits(value);
                break;
            default:
                break;
        }
        res = getCredits();
        updateCreditsUI(res);
    }
}

//Zeigt den Tipp an
function hintToast() {
    $("#quiz-hint-toast").text(hintData).fadeIn(400);
    setTimeout(function () {
        $("#quiz-hint-toast").fadeOut(400);
    },4500);
}
