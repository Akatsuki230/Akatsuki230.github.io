function uwu_nonsense(length) {
    const nonsense = ["aa", "am", "an", "ao", "eo", "ew", "me", "mr", "ny", "ow", "pp", "pu", "ra", "re", "rm", "rn", "ro", "rp", "rw", "ur", "wm", "wn", "wp", "wr", "ww", "ya"];

    let out = "";
    for (let x = 0; x <= length / 2; x++) {
        const rand = Math.floor(Math.random() * nonsense.length);
        out += nonsense[rand];
    }
    return out;
}

function uwu_nya(length) {
    return "ny" + "a".repeat(length);
}

function uwu_blush(length) {
    return ">" + "/".repeat(length) + "<";
}

function uwu_action(rand) {
    const actions = [
        "*tilts head*",
        "*twitches ears slightly*",
        "*purrs*",
        "*falls asleep*",
        "*sits on ur keyboard*",
        "*nuzzles*",
        "*stares at u*",
        "*points towards case of monster zero ultra*",
        "*sneezes*",
        "*plays with yarn*",
        "*eats all ur doritos*",
        "*lies down on a random surface*",
    ];

    if (rand === 12) {
        rand = 11;
    }
    return actions[rand];
}

function uwu_keysmash(length) {
    let out = "";
    for (let x = 0; x <= length; x++) {
        const randomAsciiValue = Math.floor(Math.random() * 26) + 65; // ASCII values for uppercase letters A-Z
        const randomLetter = String.fromCharCode(randomAsciiValue);
        out += randomLetter.toLowerCase();
    }
    return out;
}

function uwu_scrunkly(length) {
    return "aw " + uwu_keysmash(length - 3);
}

function generateCatgirl(amount, options = {}) {
    const actions = [
        "*tilts head*",
        "*twitches ears slightly*",
        "*purrs*",
        "*falls asleep*",
        "*sits on ur keyboard*",
        "*nuzzles*",
        "*stares at u*",
        "*points towards case of monster zero ultra*",
        "*sneezes*",
        "*plays with yarn*",
        "*eats all ur doritos*",
        "*lies down on a random surface*",
    ];

    let output = "";
    let looplimit = 0;
    let last = -1;
    let blockLength = 50; // Adjust this value as needed

    while (true) {
        const random = Math.floor(Math.random() * 12);

        // Don't repeat the same thing twice
        if (last === random) {
            continue;
        }

        if (random === 0 && options.uwu === true) {
            const str = "uwu";
            output += str;
        } else if (random === 1 && options.nonsense === true) {
            // nonsense
            const str = uwu_nonsense(Math.floor(Math.random() * (25 - 5 + 1)) + 5);
            output += str;
        } else if (random === 2 && options.nya === true) {
            // nyaaa~
            const str = uwu_nya(Math.floor(Math.random() * (6 - 3 + 1)) + 3);
            output += str;
        } else if (random === 3 && options.blush === true) {
            // >///<
            const str = uwu_blush(Math.floor(Math.random() * (5 - 3 + 1)) + 3);
            output += str;
        } else if (random === 4 && options.three === true) {
            // :3
            const str = ":3";
            output += str;
        } else if (random === 5 && options.actions === true) {
            // Actions
            const str = uwu_action(Math.floor(Math.random() * actions.length));
            output += str;
        } else if (random === 6 && options.keysmashing === true) {
            // Keysmash
            const str = uwu_keysmash(Math.floor(Math.random() * (25 - 5 + 1)) + 5);
            output += str;
        } else if (random === 7 && options.screaming === true) {
            // Screaming
            const str = "A".repeat(Math.floor(Math.random() * (5 - 3 + 1)) + 3);
            output += str;
        } else if (random === 8 && options.scrunkly === true) {
            // Aww the scrunkly
            const str = uwu_scrunkly(Math.floor(Math.random() * (25 - 5 + 1)) + 5);
            output += str;
        } else if (random === 9 && options.owo === true) {
            // owo
            output += "owo";
        } else if (random === 10 && options.ara === true) {
            // ara ara
            output += "ara ara~";
        }

        if (output.length > amount) {
            break;
        }

        output += " ";
        output = output.replace(/\s{2,}/g, " ");
        last = random;

        looplimit += 1;
        if (looplimit > 10000) {
            break;
        }
    }

    // Split the output into blocks
    const blocks = [];
    for (let i = 0; i < output.length; i += blockLength) {
        blocks.push(output.substr(i, blockLength));
    }

    return blocks.join(" "); // Join blocks with spaces
}
