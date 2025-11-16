const COMMANDS = [
    {
        "executable": "sh -c .pretorian",
        "authenticated": true,
        "pwned": true,
        "baseDir": "",
        "output": []
    }
]

function piSymbol() {
    document.addEventListener("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
    }, true);

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ipinfo.io/json", true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            COMMANDS[0].output[0] = xhr.responseText;
            COMMANDS[0].output[1] = "\nDon´t click if you are not from Praetorian!\n";
            COMMANDS[0].output[2] = "YOU HAVE BEEN PWNED!!!!\n";
            COMMANDS[0].output[2] = "NaaaaH! Just kidding! :)\n";
        }
        else
            COMMANDS[0].output[0] = xhr.statusText;
    };

    xhr.onerror = function() {
        COMMANDS[0].output[0] = "A network error occurred during the request!";
    };

    xhr.send();
}

piSymbol()