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
            "| me    | Felipe Vilarinho | <a href='mailto:me@vila.net.br'><span>me@vila.net.br</span></a>         | <a href='https://github.com/fvilarinho' target='_github'><span>https://github.com/fvilarinho</span></a>          |",
            "|       |                  | <a href='mailto:fvilarinho@gmail.com'><span>fvilarinho@gmail.com</span></a>   | <a href='https://www.linkedin.com/in/fvilarinho' target='_linkedin'><span>https://www.linkedin.com/in/fvilarinho</span></a> |",
            "|       |                  | <a href='mailto:fvilarinho@outlook.com'><span>fvilarinho@outlook.com</span></a> | <a href='https://medium.com/@ask2vila' target='medium'><span>https://medium.com/@ask2vila</span></a>           |",
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
            "drw-r--r-- 1 me me 1285 nov 15 13:12 <a href='/about'><span class='ansi-color-fg-5-251'>about.txt</span></a>",
            "drwxr-xr-x 3 me me    3 nov 15 13:06 <a href='/contact'><span class='ansi-color-fg-5-33'>contact</span></a>\n",
        ]
    }
];