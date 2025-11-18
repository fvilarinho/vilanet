const MENU_ITEMS = [
    {
        "name": "home",
        "label" : "HOME",
        "url" : ""
    },
    {
        "name": "about",
        "label" : "ABOUT",
        "url" : "about"
    },
    {
        "name": "bio",
        "label" : "BIO",
        "url" : "bio"
    },
    {
        "name": "contact",
        "label" : "CONTACT",
        "url" : "contact"
    },
    {
        "name": "resources",
        "label" : "RESOURCES",
        "url" : "resources"
    }
];

function renderMenu() {
    const runningLocal = isRunningLocal();
    const menuObject = document.getElementById("top-nav");

    if (menuObject != null) {
        let menuContent = "<ul>";

        for (let i = 0; i < MENU_ITEMS.length; i++) {
            menuContent += "<li><a href='";

            if (!runningLocal)
                menuContent += "/";

            menuContent += MENU_ITEMS[i].url;

            if (runningLocal) {
                if (MENU_ITEMS[i].url.length === 0)
                    menuContent += "index";

                menuContent += ".html";
            }

            menuContent += "' id='";
            menuContent += MENU_ITEMS[i].name;
            menuContent += "'>";
            menuContent += MENU_ITEMS[i].label;
            menuContent += "</a></li>";
        }

        menuContent += "</ul>";

        menuObject.innerHTML = menuContent;
    }
}

function isRunningLocal() {
    return top.location.href.startsWith("file://");
}

function getMenuUrl(menuName) {
    const menuItem = document.getElementById(menuName);

    if (menuItem != null)
        return menuItem.href;

    return "#";
}

function setActiveMenu(menuName) {
    const menuItem = document.getElementById(menuName);

    if (menuItem != null)
        menuItem.classList.add("active");
}

renderMenu();