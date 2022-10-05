/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
    let str = '1';
    for (let i=1; i < n; i++) {
        let strArray = str.split('');
        str ='';
        let count = 1;
        for (let j=0; j < strArray.length; j++) {
            if (strArray[j] !== strArray[j+1]) {
                str += count + strArray[j];
                count = 1;
            } else {
                count++;
            }
        }
    }
    return str;
};