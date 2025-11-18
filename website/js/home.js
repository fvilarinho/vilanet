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
            "\nThe programs included with this GNU/Linux system are free software; the exact distribution terms",
            "for each program are described in the individual files in /usr/share/doc/*/copyright.",
            "\nGNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent permitted by applicable law.",
            "\nLast login: " + now + " on tty1\n",
        ]
    },
    {
        "executable": "fortune | cowsay -n",
        "authenticated": true,
        "baseDir": "",
        "output": [
            "",
            '  --------------------------------',
            ' /       \e[38;5;87mWELCOME TO VILANET\e[38;5;251m       \\',
            '|                                  |',
            '|  Mind tricks don´t work on me!   |',
            '|    May the force be with you!    |',
            '|                                  |',
            '|  \e[38;97mClick on the files/directories\e[38;5;251m  |',
            ' \\          \e[38;97mto navigate!\e[38;5;251m          /',
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
            "drw-r--r-- 1 me me 1285 nov 15 13:12 <a href='/about'><span class='ansi-color-fg-5-251'>about.txt</span></a>",
            "drwxr-xr-x 3 me me    3 nov 15 13:06 <a href='/contact'><span class='ansi-color-fg-5-33'>contact</span></a>\n",
        ]
    }
];