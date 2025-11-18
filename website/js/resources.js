const COMMANDS = [
    {
        "executable": "cd resources",
        "authenticated": true,
        "baseDir": "",
        "output": [
            "cd: no such file or directory: resources\n"
        ]
    },
    {
        "executable": "ls -l",
        "authenticated": true,
        "baseDir": "",
        "output": [
            "total 16",
            "drw-r--r-- 1 me me 1285 nov 15 13:12 <a href='about.html'><span class='ansi-color-fg-5-251'>about.txt</span></a>",
            "drwxr-xr-x 3 me me    3 nov 15 13:06 <a href='contact.html'><span class='ansi-color-fg-5-33'>contact</span></a>\n",
        ]
    }
];