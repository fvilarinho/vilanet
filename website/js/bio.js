const COMMANDS = [
    {
        "executable": "cat bio.txt",
        "authenticated": true,
        "baseDir": "",
        "output": [
            "cat: bio.txt: No such file or directory\n"
        ]
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