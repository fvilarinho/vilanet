/**
 * Terminal Emulator display to look like commands are being typed and output is
 * being generated.
 *
 * Author: Dave Eddy <dave@daveeddy.com>
 * Modified by: Felipe Vilarinho <me@vila.net.br>
 * Date: April 05, 2025.
 * License: MIT
 */
const terminal = document.getElementById("terminal");

terminal.version = "1.2.0";
terminal.typeSpeed = 50 // milliseconds.
terminal.delayBetweenCommands = 1000; // milliseconds;
terminal.lineBreak = "\n";
terminal.output = document.getElementById("terminalOutput");
terminal.cursor = document.getElementById("terminalCursor");

function buildPrompt(commandsList, index) {
    let commandObject = commandsList[index];
    let ps1 = "";

    if (commandObject == null)
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
                ps1 += terminal.version;
                ps1 += " tty1";
                ps1 += terminal.lineBreak;
                ps1 += terminal.lineBreak;
                ps1 += "vilanet login: ";
            }
            else
                ps1 = "Password: ";
        }

        ps1 = ansi2Html(ps1);

        terminal.ps1 = ansi2Html(ps1);
    }

    return ps1;
}

function runCommand(commandsList, index, callback) {
    let commandObject = commandsList[index];
    let executable = commandObject.executable.split("");
    let outputList = commandObject.output;
    let outputObject = outputList.map((line) => ansi2Html(line) + terminal.lineBreak);
    let outputItems = [].concat(executable, terminal.lineBreak, outputObject);
    let count = 0;

    function type() {
        if (count === outputItems.length) {
            startCursorBlinking();

            terminal.output.innerHTML += buildPrompt(commandsList, index + 1);

            scrollIntoView();

            callback();

            return;
        }

        terminal.output.innerHTML += outputItems[count];

        count++;

        scrollIntoView();

        setTimeout(type, terminal.typeSpeed);
    }

    stopCursorBlinking();

    type();
}

function startCursorBlinking() {
    terminal.cursor.classList.remove("staticTerminalCursor");
    terminal.cursor.classList.add("blinkingTerminalCursor");
}

function stopCursorBlinking() {
    terminal.cursor.classList.remove("blinkingTerminalCursor");
    terminal.cursor.classList.add("staticTerminalCursor");
}

function scrollIntoView() {
    terminal.scrollTop = terminal.scrollHeight;
}

function main() {
    if (terminal == null || COMMANDS == null || COMMANDS.length === 0)
        return;

    function runCommands() {
        setTimeout(function () {
            if (index < COMMANDS.length) {
                terminal.running = true;

                runCommand(COMMANDS, index++, runCommands);
            }
            else
                terminal.running = false;
        }, terminal.delayBetweenCommands);
    }

    let index = 0;

    terminal.output.innerHTML = buildPrompt(COMMANDS, index);

    runCommands();
}

main();