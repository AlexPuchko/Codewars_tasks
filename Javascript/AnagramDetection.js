// write the function isAnagram
const isAnagram = function (test, original) {
    if (test.length === original.length) {
        let testS = test.toLowerCase().split("").sort();
        let originalS = original.toLowerCase().split("").sort();

        for (let i = 0; i < test.length; i++) {
            if (testS[i] !== originalS[i]) {
                return false;
            }
        }
        return true;
    } else return false;
};
