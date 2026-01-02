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
            "| \e[38;97m\e[1mName\e[0m                        | \e[38;97m\e[1mURL\e[0m                                                    |",
            "+-----------------------------+--------------------------------------------------------+",
            "| My Website                  | <a href='https://github.com/fvilarinho/vilanet' target='_vilanet'>https://github.com/fvilarinho/vilanet</a>                  |",
            "+-----------------------------+--------------------------------------------------------+",
            "| Raspberry PI camera         | <a href='https://github.com/fvilarinho/raspberrypi-camera' target='_raspberrypi-camera'>https://github.com/fvilarinho/raspberrypi-camera</a>       |",
            "+-----------------------------+--------------------------------------------------------+",
            "| Base Docker Image           | <a href='https://github.com/fvilarinho/base-image' target='_base-image'>https://github.com/fvilarinho/base-image</a>               |",
            "+-----------------------------+--------------------------------------------------------+",
            "| Base Java Docker Image      | <a href='https://github.com/fvilarinho/base-java-image' target='_base-java-image'>https://github.com/fvilarinho/base-java-image</a>          |",
            "+-----------------------------+--------------------------------------------------------+",
            "| Custom NGINX                | <a href='https://github.com/fvilarinho/nginx' target='_nginx'>https://github.com/fvilarinho/nginx</a>                    |",
            "+-----------------------------+--------------------------------------------------------+",
            "| Custom SFTP                 | <a href='https://github.com/fvilarinho/sftp' target='_sftp'>https://github.com/fvilarinho/sftp</a>                     |",
            "+-----------------------------+--------------------------------------------------------+",
            "| Custom MariaDB              | <a href='https://github.com/fvilarinho/mariadb' target='_mariadb'>https://github.com/fvilarinho/mariadb</a>                  |",
            "+-----------------------------+--------------------------------------------------------+",
            "| MariaDB Backup              | <a href='https://github.com/fvilarinho/mariadb-backup' target='_mariadb-backup'>https://github.com/fvilarinho/mariadb-backup</a>           |",
            "+-----------------------------+--------------------------------------------------------+",
            "| Files Backup                | <a href='https://github.com/fvilarinho/files-backup' target='_files-backup'>https://github.com/fvilarinho/files-backup</a>             |",
            "+-----------------------------+--------------------------------------------------------+",
            "| CI/CD Zero to Hero          | <a href='https://github.com/fvilarinho/cicdzerotohero' target='_cicdzerotohero'>https://github.com/fvilarinho/cicdzerotohero</a>           |",
            "+-----------------------------+--------------------------------------------------------+",
            "| Concepting Framework        | <a href='https://github.com/fvilarinho/framework' target='_framework'>https://github.com/fvilarinho/framework</a>                |",
            "+-----------------------------+--------------------------------------------------------+\n",
        ]
    },
    {
        "executable": "cat articles.txt",
        "authenticated": true,
        "baseDir": "resources",
        "output": [
            "\n+-----------------------------+--------------------------------------------------------+",
            "| \e[38;97m\e[1mName\e[0m                        | \e[38;97m\e[1mURL\e[0m                                                    |",
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
            "drwxr-xr-x 3 me me    3 nov 15 13:06 <a href='" + getMenuUrl("contact") + "' class='ansi-color-fg-5-33'>contact</a>",
            "drwxr-xr-x 3 me me    4 nov 15 13:06 <a href='" + getMenuUrl("resources") + "' class='ansi-color-fg-5-33'>resources</a>\n"
        ]
    }
];