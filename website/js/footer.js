const LINKS = [
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
        "url": "praetorian.html",
        "urlLabel": "&pi;",
        "className": "praetorian"
    }
];

function renderFooter() {
    let footer = document.getElementById("footer");

    if (footer != null) {
        footer = footer.getElementsByTagName("code")[0];

        if(footer != null) {
            let footerContent = "<code>";

            for (var i = 0; i < LINKS.length; i++) {
                if (i > 0)
                    footerContent += " - ";

                if (LINKS[i].label != null) {
                    footerContent += LINKS[i].label;
                    footerContent += "&nbsp;";
                }

                footerContent += "<a href='";
                footerContent += LINKS[i].url;
                footerContent += "'";

                if (LINKS[i].target != null) {
                    footerContent += " target='";
                    footerContent += LINKS[i].target;
                    footerContent += "'";
                }

                footerContent += ">";
                footerContent += "<span";

                if (LINKS[i].className != null) {
                    footerContent += " class='";
                    footerContent += LINKS[i].className;
                    footerContent += "'";
                }

                footerContent += ">";

                if (LINKS[i].urlLabel != null)
                    footerContent += LINKS[i].urlLabel;
                else
                    footerContent += LINKS[i].url;

                footerContent += "</span>";
                footerContent += "</a>";
            }

            footer.innerHTML = footerContent;
        }
    }
}

renderFooter();
