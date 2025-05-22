//Aktualisiert alle Credits auf der Seite - keine storage sondern UI Funktion
function updateCreditsUI(value) {
    $("[data-credit-display='true']").text(value);
}


//Funktion um das Theme zu aktivieren und zu speichern
function activateTheme(themeID) {
    document.body.classList.remove("dark-theme", "cyber-theme", "autumn-theme");
    if (themeID) {
        document.body.classList.add(themeID);
    }

    // CSS-Datei laden oder aktualisieren
    let existingLink = document.getElementById("custom-theme-css");
    if (existingLink) {
        if (themeID) {
            existingLink.href = "styles/themes/"+themeID+".css";
            console.log(existingLink.href);
            existingLink.disabled = false;
        } else {
            existingLink.disabled = true;
        }
    } else if (themeID) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "styles/themes/"+themeID+".css";
        console.log(link.href);
        link.id = "custom-theme-css";
        document.head.appendChild(link);
    }

    setActiveTheme(themeID);
}