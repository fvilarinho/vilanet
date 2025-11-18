function ansi2Html(value) {
    let result = "";

    if (value != null && value.length > 0) {
        let pos = value.indexOf("\e[");

        if (pos >= 0) {
            const values = value.split("\e[");

            for (let i = 0; i < values.length; i++) {
                let item = values[i];

                if (item === "m")
                    result += "<br/>";
                else {
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
                            result += '</span>';
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
                            result += '</span>';
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
                        result += '</span>';
                    }
                    else
                        result += item;
                }
            }
        }
        else
            result = value;
    }

    return result;
}