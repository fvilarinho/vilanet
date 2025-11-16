const MENU_ITEMS = [
    {
        "name": "home",
        "label" : "HOME",
        "url" : "index.html"
    },
    {
        "name": "about",
        "label" : "ABOUT",
        "url" : "about.html"
    },
    {
        "name": "bio",
        "label" : "BIO",
        "url" : "bio.html"
    },
    {
        "name": "contact",
        "label" : "CONTACT",
        "url" : "contact.html"
    },
    {
        "name": "resources",
        "label" : "RESOURCES",
        "url" : "#"
    }
];

function renderMenu() {
    const menuObject = document.getElementById("top-nav");

    if(menuObject != null) {
        let menuContent = "<ul>";

        for (var i = 0; i < MENU_ITEMS.length; i++) {
            menuContent += "<li><a href='";
            menuContent += MENU_ITEMS[i].url;
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

function setActiveMenu(menuName) {
    var menuItem = document.getElementById(menuName);

    if (menuItem != null)
        menuItem.classList.add("active");
}

renderMenu();