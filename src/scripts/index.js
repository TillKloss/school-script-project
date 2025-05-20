$(document).ready(listener);

//routet an quiz.html
function listener() {
    initCredits();
    initQuestions();
    updateCreditsUI(getCredits());
    getSolvedQuestions();
    $(".box-card").click(function () {
        const url = $(this).attr("url-data");
        window.location.href = url;
    });
}