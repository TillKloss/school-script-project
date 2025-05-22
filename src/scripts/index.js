$(document).ready(listener);

function listener() {
    initCredits();
    initQuestions();
    initTheme();

    const savedTheme = getActiveTheme();
    if (savedTheme) {
        activateTheme(savedTheme);
    }

    updateCreditsUI(getCredits());
    getSolvedQuestions();

    //routing
    $(".box-card").click(function () {
        const url = $(this).attr("url-data");
        window.location.href = url;
    });
}