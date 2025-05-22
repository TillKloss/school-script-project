$(document).ready(function () {
    initTheme();

    //Gespeichertes Theme wird aktiviert, falls vorhanden
    const savedTheme = getActiveTheme();
    if (savedTheme) {
        activateTheme(savedTheme);
    }

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

//Fügt das Item hinzu
function addToBuyedItems() {
    const themes = ["dark-theme", "cyber-theme", "autumn-theme"];
    themes.forEach(function (themeID) {
        $("#" + themeID).on("click", function () {
            const alreadyBought = getBuyedItems().includes(themeID);

            if (alreadyBought) {
                activateTheme(themeID);
                return;
            }

            if (addBuyedItems(themeID)) {
                const price = parseInt($("#" + themeID + "-price").text());

                if (getCredits() < price) {
                    notEnoughCreditsToast();
                    removeBuyedItems(themeID);
                    return;
                }

                removeCredits(price);
                updateBuyedItemsUI();
                updateCreditsUI(getCredits());

                activateTheme(themeID);
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
