/**
 * Terminal Emulator display to look like commands are being typed and output is
 * being generated.
 *
 * Author: Dave Eddy <dave@daveeddy.com>
 * Modified by: Felipe Vilarinho <me@vila.net.br>
 * Date: April 05, 2025.
 * License: MIT
 */
const TYPING_SPEED = 50;
const RUN_DELAY = 1500;
const LINEBREAK = "\n";

const terminal = document.getElementById("main-terminal").children[0];

function buildPrompt(index) {
    let commandObject = COMMANDS[index];
    let ps1 = "";

    if(commandObject == null)
        ps1 = terminal.ps1;
    else {
        if (commandObject.authenticated != null && commandObject.authenticated) {
            let now = new Date();

            if (commandObject.pwned == null || !commandObject.pwned) {
                ps1 = "[";
                ps1 += "<span class='ansi-color-fg-5-223'>" + now.toUTCString() + "</span>";
                ps1 += " - ";
                ps1 += "<span class='ansi-color-fg-5-120'>me</span>";
                ps1 += "@";
                ps1 += "<span class='ansi-color-fg-5-87'>vilanet</span>";
                ps1 += "<span class='ansi-color-fg-5-15'>:</span>";
                ps1 += "<span class='ansi-color-fg-5-33'>~";

                let currentDir = commandObject.baseDir;

                if (currentDir != null && currentDir.length > 0)
                    ps1 += "/" + currentDir;

                ps1 += "</span>]";
            }
            else
                ps1 = "$ ";
        }
        else if (commandObject.authenticated != null && !commandObject.authenticated) {
            if (index === 0)
                ps1 = "vilanet linux 1.0.0 tty1\n\nvilanet login: ";
            else
                ps1 = "Password: ";
        }
    }

    return ps1;
}

function runCommand(index, callback) {
    let commandObject = COMMANDS[index];
    let executable = commandObject.executable.split("");
    let outputList = commandObject.output;
    let outputObject = outputList.map((line) => line + LINEBREAK);
    let outputItems = [].concat(executable, LINEBREAK, outputObject);
    let count = 0;

    function type() {
        if (count === outputItems.length) {
            blinkCursorStart();

            terminal.ps1 = buildPrompt(index + 1);

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
            if(index < COMMANDS.length)
                runCommand(index++, runCommands);
        }, RUN_DELAY);
    }

    terminal.ps1 = buildPrompt(index);
    terminal.innerHTML = terminal.ps1;

    runCommands();
}

main();