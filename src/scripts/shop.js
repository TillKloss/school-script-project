$(document).ready(function () {
    updateBuyedItemsUI();
    addToBuyedItems();
    updateCreditsUI(getCredits());

});

//Zeigt eine Fehlermeldung an (nicht genügend Credits)
function notEnoughCreditsToast() {
    $("#shop-toast").text("Nicht genügend Credits!").fadeIn(400);
    setTimeout(function () {
        $("#shop-toast").fadeOut(400);
    },4500);
}

//Fügt die geklickte Card zu den gekauften Items hinzu
function addToBuyedItems() {
    const themes = ["dark-theme", "cyber-theme", "autumn-theme"]; //verworfen: dasselbe auch für Lektionen und sontiges machen in dieser Funktion -> copy paste isnt waste
    themes.forEach(function (themeID) {
        $("#" + themeID).on("click", function () {
            if (addBuyedItems(themeID)) { //addBuyedItems hat einen return Wert
                const price = $("#" + themeID + "-price").text();
                console.log(price);
                //check ob genug credits
                if(!(getCredits() >= price)) {
                    notEnoughCreditsToast();
                    removeBuyedItems(themeID);
                    return;
                }
                removeCredits(price);
                updateBuyedItemsUI();
                updateCreditsUI(getCredits());
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
