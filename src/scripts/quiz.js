$(document).ready(function () {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get('topic'); //topic=x wird geholt
})

$.getJSON("questions.json", function (data) {
    if (!data[topic]) {
        $("#questions").html("<h2>Dieses Quiz existiert nicht</h2>")
        return;
    }

    $("#quiz-title")
})