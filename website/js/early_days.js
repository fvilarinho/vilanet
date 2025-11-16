const COMMANDS = [
    {
        "executable": "cat 1.early_days.txt",
        "authenticated": true,
        "baseDir": "bio",
        "output": [
            "\nI started in this crazy world of computing probably in 1991 (11 - 12 years old).",
            "As any kid at that age, I really enjoyed playing video games (Atari 2600, Sega Master\nSystem,NES, etc).\n",
            "I remember spending hours playing and trying to figure out how they worked. I always was\ncurious (still am)!\n",
            "One day, I got my 1st personal computer (MSX gradiente DD plus) and I discovered that I\ncould create my own games!\n",
            "I was so excited and I started to learn how to program in BASIC. Basically the games were\nRPGs (Role Playing Games)!\n",
            "I remember to get excited after I finished the game and tell the news to my friends at\nschool.\n",
            "So that was my red pill!\n"
        ]
    },
    {
        "executable": "ls -l",
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