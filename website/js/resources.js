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
            "drw-r--r-- 1 me me 313 nov 15 13:05 projects.txt",
            "drw-r--r-- 1 me me 313 nov 15 13:05 articles.txt\n"
        ]
    },
    {
        "executable": "cat projects.txt",
        "authenticated": true,
        "baseDir": "resources",
        "output": [
            "\n+-----------------------------+--------------------------------------------------------+",
            "| \e[38;97mName\e[38;5;251m                        | \e[38;97mURL\e[38;5;251m                                                    |",
            "+-----------------------------+--------------------------------------------------------+",
            "| My Website                  | <a href='https://github.com/fvilarinho/vilanet' target='_vilanet'>https://github.com/fvilarinho/vilanet</a>                  |",
            "| Raspberry PI camera         | <a href='https://github.com/fvilarinho/raspberrypi-camera' target='_raspberrypi-camera'>https://github.com/fvilarinho/raspberrypi-camera</a>       |",
            "+-----------------------------+--------------------------------------------------------+\n",
        ]
    },
    {
        "executable": "cat articles.txt",
        "authenticated": true,
        "baseDir": "resources",
        "output": [
            "\n+-----------------------------+--------------------------------------------------------+",
            "| \e[38;97mName\e[38;5;251m                        | \e[38;97mURL\e[38;5;251m                                                    |",
            "+-----------------------------+--------------------------------------------------------+",
            "| My AI Journey — The Genesis | <a href='https://medium.com/@ask2vila/my-ai-journey-the-genesis-b2a604c62f6a' target='_myaijourney'>https://medium.com/@ask2vila/my-ai-journey-the-genesis</a> |",
            "+-----------------------------+--------------------------------------------------------+\n"
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