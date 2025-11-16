let now = new Date();

const COMMANDS = [
    {
        "executable": "me",
        "authenticated": false,
        "output": []
    },
    {
        "executable": "*******",
        "authenticated": false,
        "output": [
            "\nThe programs included with this GNU/Linux system are free software; the exact distribution",
            "terms for each program are described in the individual files in /usr/share/doc/*/copyright.\n",
            "GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent permitted by applicable law.\n",
            "Last login: " + now + " on tty1\n",
        ]
    },
    {
        "executable": "fortune | cowsay -n",
        "authenticated": true,
        "baseDir": "",
        "output": [
            "",
            '  --------------------------------',
            ' /       <a>WELCOME TO VILANET</a>       \\',
            '|                                  |',
            '|  Mind tricks don´t work on me!   |',
            '|    May the force be with you!    |',
            '|                                  |',
            '|  <span class="ansi-color-fg-97">Click on the files/directories</span>  |',
            ' \\          <span class="ansi-color-fg-97">to navigate!</span>          /',
            '  --------------------------------',
            '        \\   ^__^',
            '         \\  (oo)\\_______',
            '            (__)\\       )\\/\\',
            '                ||----w |',
            '                ||     ||\n'
        ]
    },
    {
        "executable": "ls -l",
        "authenticated": true,
        "baseDir": "",
        "output": [
            "total 16",
            "drw-r--r-- 1 me me 1285 nov 15 13:12 <a href='about.html'><span class='ansi-color-fg-5-251''>about.txt</span></a>",
            "drwxr-xr-x 3 me me    6 jan  1 12:00 <a href='bio.html'><span class='ansi-color-fg-5-33'>bio</span></a>",
            "drwxr-xr-x 3 me me    3 nov 15 13:06 <a href='contact.html'><span class='ansi-color-fg-5-33'>contact</span></a>",
            "drwxr-xr-x 2 me me    2 feb  2 12:00 <a href='#'><span class='ansi-color-fg-5-33'>resources</span></a>\n"
        ]
    }
];