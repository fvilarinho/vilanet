const FOOTER_ITEMS = [
    {
        "label": "Follow the white rabbit:",
        "url": "https://github.com/fvilarinho",
        "urlLabel": "github.com/fvilarinho",
        "target": "_github"
    },
    {
        "label": "this website was inspired by:",
        "url": "https://github.com/bahamas10",
        "urlLabel": "github.com/bahamas10",
        "target": "_ysap"
    },
    {
        "url": "praetorian",
        "urlLabel": "&pi;",
        "className": "praetorian"
    }
];

function renderFooter() {
    let footer = document.getElementById("footer");

    if (footer != null) {
        let footerContent = "";

        for (var i = 0; i < FOOTER_ITEMS.length; i++) {
            if (i > 0)
                footerContent += " - ";

            if (FOOTER_ITEMS[i].label != null) {
                footerContent += FOOTER_ITEMS[i].label;
                footerContent += "&nbsp;";
            }

            footerContent += "<a href='";

            if (!isRunningLocal())
                footerContent += FOOTER_ITEMS[i].url;
            else {
                if (FOOTER_ITEMS[i].url.length === 0)
                    footerContent += "index";
                else
                    footerContent += FOOTER_ITEMS[i].url;

                footerContent += ".html";
            }

            footerContent += "'";

            if (FOOTER_ITEMS[i].target != null) {
                footerContent += " target='";
                footerContent += FOOTER_ITEMS[i].target;
                footerContent += "'";
            }

            if (FOOTER_ITEMS[i].className != null) {
                footerContent += " class='";
                footerContent += FOOTER_ITEMS[i].className;
                footerContent += "'";
            }

            footerContent += "'>";

            if (FOOTER_ITEMS[i].urlLabel != null)
                footerContent += FOOTER_ITEMS[i].urlLabel;
            else
                footerContent += FOOTER_ITEMS[i].url;

            footerContent += "</a>";
        }

        footer.innerHTML = footerContent;
    }
}

renderFooter();
