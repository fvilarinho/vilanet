function ansi2Html(value) {
    let result = "";

    if (value != null && value.length > 0) {
        let pos = value.indexOf("\e[");

        if (pos >= 0) {
            const values = value.split("\e[");
            let stylesCount = 0;

            for (let i = 0; i < values.length; i++) {
                let item = values[i];
                let fg = "";
                let bg = "";
                let char = "";

                pos = 0;

                if (item.startsWith("38;")) {
                    pos = item.indexOf(";48;");

                    if (pos > 0) {
                        fg = item.substring(3, pos).replaceAll(";", "-");
                        bg = item.substring(pos + 4).replaceAll(";", "-");

                        pos = bg.indexOf("m");

                        if (pos > 0) {
                            char = bg.substring(pos + 1);
                            bg = bg.substring(0, pos);
                        }

                        result += '<span class="ansi-color-fg-';
                        result += fg;
                        result += ' ansi-color-bg-';
                        result += bg;
                        result += '">';
                        result += char;

                        stylesCount++;
                    }
                    else {
                        pos = item.indexOf("m");

                        if (pos > 0) {
                            char = item.substring(pos + 1);
                            fg = item.substring(3, pos).replaceAll(";", "-");
                        }

                        result += '<span class="ansi-color-fg-';
                        result += fg;
                        result += '">';
                        result += char;

                        stylesCount++;
                    }
                }
                else if (item.startsWith("48;")) {
                    bg = item.substring(3).replaceAll(";", "-");
                    pos = bg.indexOf("m");

                    if (pos > 0) {
                        char = bg.substring(pos + 1);
                        bg = bg.substring(0, pos);
                    }

                    result += '<span class="ansi-color-bg-';
                    result += bg;
                    result += '">';
                    result += char;

                    stylesCount++;
                }
                else if (item.startsWith("0m")) {
                    char = item.substring(pos + 2);

                    for(let c = 0 ; c < stylesCount ; c++)
                        result += '</span>';

                    stylesCount = 0;

                    result += char;
                }
                else if (item.startsWith("1m")) {
                    char = item.substring(pos + 2);

                    result += '<span style="font-weight: bold;">';
                    result += char;

                    stylesCount++;
                }
                else if (item.startsWith("2m")) {
                    char = item.substring(pos + 2);

                    result += '<span style="opacity: 0.5;">';
                    result += char;

                    stylesCount++;
                }
                else if (item.startsWith("3m")) {
                    char = item.substring(pos + 2);

                    result += '<span style="font-style: italic;">';
                    result += char;

                    stylesCount++;
                }
                else if (item.startsWith("4")) {
                    char = item.substring(pos + 2);

                    result += '<span style="text-decoration: underline;">';
                    result += char;

                    stylesCount++;
                }
                else if (item.startsWith("9")) {
                    char = item.substring(pos + 2);

                    result += '<span style="text-decoration: line-through;">';
                    result += char;

                    stylesCount++;
                }
                else
                    result += item;
            }

            for(let c = 0 ; c < stylesCount ; c++)
                result += '</span>';
        }
        else
            result = value;
    }

    return result;
}