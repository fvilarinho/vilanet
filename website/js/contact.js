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
            "drw-r--r-- 1 me me 313 nov 15 13:05 <a href='index.html'><span style='color: #cacaca;'>myinfo.txt</span></a>\n"
        ]
    },
    {
        "executable": "cat myinfo.txt",
        "authenticated": true,
        "baseDir": "contact",
        "output": [
            "<span class='ansi-color-fg-97'>Login  Name              e-Mails                 Sociais / Websites</span>",
            "me     Felipe Vilarinho  <a href='mailto:me@vila.net.br'><span style='color: #cacaca;'>me@vila.net.br</span></a>          <a href='https://github.com/fvilarinho' target='_github'><span style='color: #cacaca;'>https://github.com/fvilarinho</span></a>",
            "                         <a href='mailto:fvilarinho@gmail.com'><span style='color: #cacaca;'>fvilarinho@gmail.com</span></a>    <a href='https://www.linkedin.com/in/fvilarinho' target='_linkedin'><span style='color: #cacaca;'>https://www.linkedin.com/in/fvilarinho</span</a>",
            "                         <a href='mailto:fvilarinho@outlook.com'><span style='color: #cacaca;'>fvilarinho@outlook.com</span></a>  <a href='https://medium.com/@ask2vila' target='_medium'><span style='color: #cacaca;'>https://medium.com/@ask2vila</span></a>\n",
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
            "drw-r--r-- 1 me me 1285 nov 15 13:12 <a href='about.html'><span class='ansi-color-fg-5-251'>about.txt</span></a>",
            "drwxr-xr-x 3 me me    6 jan  1 12:00 <a href='bio.html'><span class='ansi-color-fg-5-33'>bio</span></a>",
            "drwxr-xr-x 3 me me    3 nov 15 13:06 <a href='contact.html'><span class='ansi-color-fg-5-33'>contact</span></a>",
            "drwxr-xr-x 2 me me    2 feb  2 12:00 <a href='#'><span class='ansi-color-fg-5-33'>resources</span></a>\n"
        ]
    }
];