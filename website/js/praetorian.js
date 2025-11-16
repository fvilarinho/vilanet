const COMMANDS = [
    {
        "executable": "sh -c .praetorian",
        "authenticated": true,
        "pwned": true,
        "baseDir": "",
        "output": []
    }
];

const PRANK_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const PRAETORIAN_OUTPUT_URL = "https://ipinfo.io/json"

function exit() {
    if(terminal != null && terminal.running != null && !terminal.running) {
        var exitObject = document.getElementById("exit");

        exitObject.addEventListener("click", function(event) {
            event.stopPropagation();
            event.preventDefault();
        }, true);

        const PRANK_COMMANDS = [
            {
                "executable": "access security",
                "authenticated": true,
                "pwned": true,
                "baseDir": "",
                "output": [
                    "access: PERMISSION DENIED."
                ]
            },
            {
                "executable": "access security grid",
                "authenticated": true,
                "pwned": true,
                "baseDir": "",
                "output": [
                    "access: PERMISSION DENIED."
                ]
            },
            {
                "executable": "access main security grid",
                "authenticated": true,
                "pwned": true,
                "baseDir": "",
                "output": [
                    "access: PERMISSION DENIED....and....",
                    "YOU DIDN´T SAY THE MAGIC WORD!",
                    "YOU DIDN´T SAY THE MAGIC WORD!",
                    "YOU DIDN´T SAY THE MAGIC WORD!",
                    "YOU DIDN´T SAY THE MAGIC WORD!",
                    "YOU DIDN´T SAY THE MAGIC WORD!",
                    "YOU DIDN´T SAY THE MAGIC WORD!",
                    "YOU DIDN´T SAY THE MAGIC WORD!",
                    "YOU DIDN´T SAY THE MAGIC WORD!",
                    "YOU DIDN´T SAY THE MAGIC WORD!",
                    "YOU DIDN´T SAY THE MAGIC WORD!\n",
                    "SYSTEMS LOCKED! SHUTDOWN NOW... GOOD BYE!",
                ]
            }
        ];

        let index = 0;

        function shutdown() {
            top.location.href = PRANK_URL;
        }

        function runPrank() {
            setTimeout(function () {
                if (index < PRANK_COMMANDS.length)
                    runCommand(PRANK_COMMANDS, index++, runPrank);
                else
                    shutdown();

            }, RUN_DELAY);
        }

        runPrank();
    }
}

function piSymbol() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", PRAETORIAN_OUTPUT_URL, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            COMMANDS[0].output[0] = "\n<span class='ansi-color-fg-97'>I CAN SEE YOU!!!</span>\n";
            COMMANDS[0].output[1] = xhr.responseText;
            COMMANDS[0].output[2] = "\nDon´t click if you are not from Praetorian!\n";
            COMMANDS[0].output[3] = "<span class='ansi-color-fg-97'>YOU HAVE BEEN PWNED!!!</span>\n";
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