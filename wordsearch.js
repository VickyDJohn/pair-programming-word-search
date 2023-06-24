const wordSearch = (letters, word) => {
    if (word === "") {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    for (let i = 0; i < letters.length; i++) {
        let result = '';
        for (let j = 0; j < letters[i].length; j++) {
            result += letters[j][i];
        }
        if (result.includes(word)) {
            return true;
        }
    }
    return false;
};

module.exports = wordSearch;