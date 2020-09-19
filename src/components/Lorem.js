function Lorem(wordCount) {
    let total = 0;
    let output = "";
    let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
        "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " + 
        "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    for (let i = 0; i < str.length; i++) {
        output += str[i];

        if (str[i] === " ") { 
            total += 1; 
        }

        if (total === wordCount) {
            break;
        }
    }

    return output;
}

export default Lorem;