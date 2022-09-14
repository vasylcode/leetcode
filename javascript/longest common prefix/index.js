/**
 * @param {string[]} strs
 * @return {string}
 */
 const longestCommonPrefix = function(strs) {
    let prefix = "";
    let first = strs[0];
    for(let i = 1; i <= first.length; i++){
        let checkedPrefix =  first.slice(0, i);
        if (strs.every((first)=>first.startsWith(checkedPrefix))){
            prefix = checkedPrefix;
        }
    }
    return prefix;
};