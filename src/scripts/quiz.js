$(document).ready(function () {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get('topic'); //topic wird geholt

    //sucht das passende Quiz in der JSON
    $.getJSON("storage/questions.json", function (data) {
        //prüft ob das Quiz existiert
        if (!data[topic]) {
            $("#questions").html("<h2>Dieses Quiz existiert nicht</h2>")
        }

        //Fragestellung, Antworten und Position der korrekten Antwort erhalten
        const quizData = data[topic];
        const questionData = quizData["questions"][0];
        const answerData = [questionData["answers"][0], questionData["answers"][1], questionData["answers"][2]];
        const correctAnswer = questionData["correct"];

        const formattedTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
        $("#quiz-title").text(formattedTopic);
        $("#grid-question-card").text(questionData.question);
        $("#a1").text(answerData[0]);
        $("#a2").text(answerData[1]);
        $("#a3").text(answerData[2]);
    });
});