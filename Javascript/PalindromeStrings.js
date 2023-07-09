function isPalindrome(line) {
    let str = String(line).split("").reverse().join("");
    if (str == line) {
        return true;
    } else {
        return false;
    }
}
