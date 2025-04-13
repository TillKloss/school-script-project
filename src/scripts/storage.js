//
const KEYS = {
    CREDITS: "credits",
    SOLVED_QUESTION: "solved_question",
    BUYED_HINT: "buyed_hint"

};

//-----------------------CREDIT SECTION--------------------------

//sichert, dass credits angelegt werden
function initCredits() {
    if (localStorage.getItem(KEYS.CREDITS) === null) {
        localStorage.setItem(KEYS.CREDITS, (0).toString());
    }
}

//Gibt die Anzahl der Credits zurück
function getCredits() {
    return parseInt(localStorage.getItem(KEYS.CREDITS)) || 0;
}

//Setzt eine neue Anzahl an Credits
function setCredits(value) {
    localStorage.setItem(KEYS.CREDITS, value);
}

//Fügt eine Anzahl an Credits hinzu
function addCredits(value) {
    let currentCredits = parseInt(localStorage.getItem(KEYS.CREDITS));
    let res = currentCredits + parseInt(value);
    localStorage.setItem(KEYS.CREDITS, res.toString());

    return currentCredits + value;
}

//Entfernt eine Anzahl von Credits
function removeCredits(value) {
    let currentCredits = localStorage.getItem(KEYS.CREDITS);
    if (value > currentCredits) {
        value = currentCredits;
    }
    localStorage.setItem(KEYS.CREDITS, (currentCredits - value).toString());

    return currentCredits - value;
}

//debug Funktion
function resetCredits() {
    localStorage.removeItem(KEYS.CREDITS);
    updateCreditsUI(0);
}

//-----------------------QUESTION SECTION--------------------------

//sichert, dass solved questions angelegt werden
function initQuestions() {
    if (localStorage.getItem(KEYS.SOLVED_QUESTION) === null) {
        localStorage.setItem(KEYS.SOLVED_QUESTION, JSON.stringify([]));
    }
}

//Gibt die gelösten Fragen zurück
function getSolvedQuestions() {
    return JSON.parse(localStorage.getItem(KEYS.SOLVED_QUESTION)) || [];
}

//Fügt eine Frage zur Liste hinzu
function addSolvedQuestion(question) {
    let solvedQuestions = getSolvedQuestions();
    if (solvedQuestions.includes(question)) {
        return 0;
    }
    solvedQuestions.push(question);
    localStorage.setItem(KEYS.SOLVED_QUESTION, JSON.stringify(solvedQuestions));

    return 1;
}

//debug Funktion
function resetSolvedQuestions() {
    localStorage.removeItem(KEYS.SOLVED_QUESTION);
}

//-----------------------HINT SECTION--------------------------

//sichert das buyed-hint angelet wird
function initBuyedHints() {
    if (localStorage.getItem(KEYS.BUYED_HINT) === null) {
        localStorage.setItem(KEYS.BUYED_HINT, JSON.stringify([]));
    }
}

//Gibt die gekauften Tipps zurück
function getBuyedHints() {
    return JSON.parse(localStorage.getItem(KEYS.BUYED_HINT)) || [];
}

//Fügt einen Tipp zur Liste hinzu
function addBuyedHints(hint) {
    let buyedHints = getBuyedHints();
    if (buyedHints.includes(hint)) {
        return 0;
    }
    buyedHints.push(hint);
    localStorage.setItem(KEYS.BUYED_HINT, JSON.stringify(buyedHints));

    return 1;
}

//debug Funktion
function resetBuyedHints() {
    localStorage.removeItem(KEYS.BUYED_HINT);
}