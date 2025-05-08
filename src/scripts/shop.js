$(document).ready(function () {
    updateBuyedItemsUI();
    addToBuyedItems();
});

//Fügt die geklickte Card zu den gekauften Items hinzu
function addToBuyedItems() {
    const themes = ["dark-theme", "cyber-theme", "autumn-theme"]; //dasselbe auch für Lektionen und sontiges machen in dieser Funktion -> copy paste isnt waste
    themes.forEach(function (themeID) {
        $("#" + themeID).on("click", function () {
            if (addBuyedItems(themeID)) { //addBuyedItems hat einen return Wert
                updateBuyedItemsUI();
                const price = $("#" + themeID + "-price").text();
                console.log(price);
                //weitermachen mit Preis abziehen !!in quiz.js muss noch check nach genügend credits eingebaut werden -> toast fall nicht genug!!
            }
        });
    });
}

//Überprüft ob Items bereits gekauft wurden und passt das UI der Seite an
function updateBuyedItemsUI() {
    const purchasedItems = getBuyedItems();
    purchasedItems.forEach(function (itemID) {
        const $item = $("#" + itemID);
        const $preview = $item.find(".theme-preview");
        const $checkImage = $preview.find("img");

        if ($preview.length) {
            $preview.removeClass().addClass("purchased");
        }

        if ($checkImage.length) {
            $checkImage.css("display", "inline");
        }
    });
}
