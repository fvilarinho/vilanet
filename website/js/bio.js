const COMMANDS = [
    {
        "executable": "cd bio",
        "authenticated": true,
        "baseDir": "",
        "output": [""]
    },
    {
        "executable": "ls -la",
        "authenticated": true,
        "baseDir": "bio",
        "output": [
        "total 8",
        "drw-r--r-- 1 me me  633 nov 15 14:11 <a href='early_days.html'><span style='color: #cacaca;'>1.early_days.txt</span></a>",
        "drw-r--r-- 1 me me  989 nov 15 14:11 <a href='college.html'><span style='color: #cacaca;'>2.college.txt</span></a>",
        "drw-r--r-- 1 me me  989 nov 15 14:11 <a href='career.html'><span style='color: #cacaca;'>3.career.txt</span></a>",
        "drw-r--r-- 1 me me  989 nov 15 14:11 <a href='future.html'><span style='color: #cacaca;'>4.future.txt</span></a>\n",
        ]
    },
    {
        "executable": "cd ..",
        "authenticated": true,
        "baseDir": "bio",
        "output": [""]
    },
    {
        "executable": "ls -l",
        "authenticated": true,
        "baseDir": "",
        "output": [
            "total 16",
            "drw-r--r-- 1 me me 1285 nov 15 13:12 <a href='about.html'><span class='ansi-color-fg-5-251'>about.txt</span></a>",
            "drwxr-xr-x 3 me me    6 jan  1 12:00 <a href='bio.html'><span class='ansi-color-fg-5-33'>bio</span></a>",
            "drwxr-xr-x 3 me me    3 nov 15 13:06 <a href='contact.html'><span class='ansi-color-fg-5-33'>contact</span></a>",
            "drwxr-xr-x 2 me me    2 feb  2 12:00 <a href='#'><span class='ansi-color-fg-5-33'>resources</span></a>\n"
        ]
    }
];