const COMMANDS = [
    {
        "executable": "cd resources",
        "authenticated": true,
        "baseDir": "",
        "output": [""]
    },
    {
        "executable": "ls -l",
        "authenticated": true,
        "baseDir": "resources",
        "output": [
            "total 5",
            "drw-r--r-- 1 me me 313 nov 15 13:05 myprojects.txt\n"
        ]
    },
    {
        "executable": "cat myprojects.txt",
        "authenticated": true,
        "baseDir": "resources",
        "output": [
            "+---------------------+--------------------------------------------------+",
            "| \e[38;97mName\e[38;5;251m                | \e[38;97mURL\e[38;5;251m                                              |",
            "+---------------------+--------------------------------------------------+",
            "| Raspberry PI camera | <a href='https://github.com/fvilarinho/raspberrypi-camera' target='_raspberrypi-camera'>https://github.com/fvilarinho/raspberrypi-camera</a> |",
            "+---------------------+--------------------------------------------------+\n"
        ]
    },
    {
        "executable": "cd ..",
        "authenticated": true,
        "baseDir": "resources",
        "output": [""]
    },
    {
        "executable": "ls -l",
        "authenticated": true,
        "baseDir": "",
        "output": [
            "total 16",
            "drw-r--r-- 1 me me 1285 nov 15 13:12 <a href='" + getMenuUrl("about") + "' class='ansi-color-fg-5-251'>about.txt</a>",
            "drwxr-xr-x 3 me me    3 nov 15 13:06 <a href='" + getMenuUrl("contact") + "' class='ansi-color-fg-5-33'>contact</a>\n",
        ]
    }
];