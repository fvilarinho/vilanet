const COMMANDS = [
    {
        "executable": "cd contact",
        "authenticated": true,
        "baseDir": "",
        "output": [""]
    },
    {
        "executable": "ls -l",
        "authenticated": true,
        "baseDir": "contact",
        "output": [
            "total 5",
            "drw-r--r-- 1 me me 313 nov 15 13:05 myinfo.txt\n"
        ]
    },
    {
        "executable": "cat myinfo.txt",
        "authenticated": true,
        "baseDir": "contact",
        "output": [
            "+-------+------------------+------------------------+----------------------------------------+",
            "| \e[38;97mLogin\e[38;5;251m | \e[38;97mName\e[38;5;251m             | \e[38;97me-Mails\e[38;5;251m                | \e[38;97mSocials / Websites\e[38;5;251m                     |",
            "+-------+------------------+------------------------+----------------------------------------+",
            "| me    | Felipe Vilarinho | <a href='mailto:me@vila.net.br'>me@vila.net.br</a>         | <a href='https://github.com/fvilarinho' target='_github'>https://github.com/fvilarinho</a>          |",
            "|       |                  | <a href='mailto:fvilarinho@gmail.com'>fvilarinho@gmail.com</a>   | <a href='https://www.linkedin.com/in/fvilarinho' target='_linkedin'>https://www.linkedin.com/in/fvilarinho</a> |",
            "|       |                  | <a href='mailto:fvilarinho@outlook.com'>fvilarinho@outlook.com</a> | <a href='https://medium.com/@ask2vila' target='medium'>https://medium.com/@ask2vila</a>           |",
            "+-------+------------------+------------------------+----------------------------------------+\n",
        ]
    },
    {
        "executable": "cd ..",
        "authenticated": true,
        "baseDir": "contact",
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