/**
 * Terminal Emulator display to look like commands are being typed and output is
 * being generated.
 *
 * Author: Dave Eddy <dave@daveeddy.com>
 * Modified by: Felipe Vilarinho <me@vila.net.br>
 * Date: April 05, 2025.
 * License: MIT
 */
const VERSION = "1.1.0";
const TYPING_SPEED = 50;
const RUN_DELAY = 1000;
const LINEBREAK = "\n";

const terminal = document.getElementById("main-terminal").children[0];

function buildPrompt(commandsList, index) {
    let commandObject = commandsList[index];
    let ps1 = "";

    if(commandObject == null)
        ps1 = terminal.ps1;
    else {
        if (commandObject.authenticated != null && commandObject.authenticated) {
            let now = new Date();

            if (commandObject.pwned == null || !commandObject.pwned) {
                ps1 = "[\e[38;5;223m";
                ps1 += now.toUTCString();
                ps1 += "\e[38;5;251m - \e[38;5;120mme\e[38;5;251m@\e[38;5;87mvilanet\e[38;5;251m:\e[38;5;33m~";

                let currentDir = commandObject.baseDir;

                if (currentDir != null && currentDir.length > 0) {
                    ps1 += "/";
                    ps1 += currentDir;
                }

                ps1 += "\e[38;5;251m]$ ";
            }
            else {
                ps1 = "> ";

                terminal.pwned = true;
            }
        }
        else if (commandObject.authenticated != null && !commandObject.authenticated) {
            if (index === 0) {
                ps1 = "vilanet linux ";
                ps1 += VERSION;
                ps1 += " tty1\n\n";
                ps1 += "vilanet login: ";
            }
            else
                ps1 = "Password: ";
        }
    }

    return ansi2Html(ps1);
}

function runCommand(commandsList, index, callback) {
    let commandObject = commandsList[index];
    let executable = commandObject.executable.split("");
    let outputList = commandObject.output;
    let outputObject = outputList.map((line) => ansi2Html(line) + LINEBREAK);
    let outputItems = [].concat(executable, LINEBREAK, outputObject);
    let count = 0;

    function type() {
        if (count === outputItems.length) {
            blinkCursorStart();

            terminal.ps1 = buildPrompt(commandsList, index + 1);
            terminal.innerHTML += terminal.ps1;

            callback();

            return;
        }

        let outputItem = outputItems[count];

        terminal.innerHTML += outputItem;

        count++;

        setTimeout(type, TYPING_SPEED);
    }

    blinkCursorEnd();

    type();
}

function blinkCursorStart() {
    terminal.classList.remove("no-animation");
}

function blinkCursorEnd() {
    terminal.classList.add("no-animation");
}

function main() {
    let index = 0;

    function runCommands() {
        setTimeout(function () {
            if (index < COMMANDS.length) {
                runCommand(COMMANDS, index++, runCommands);

                terminal.running = true;
            }
            else
                terminal.running = false;
        }, RUN_DELAY);
    }

    terminal.ps1 = buildPrompt(COMMANDS, index);
    terminal.innerHTML = terminal.ps1;

    runCommands();
}

main();