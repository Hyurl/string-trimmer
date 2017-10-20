/**
 * Strip whitespace or other characters.
 */
function StringTrimmer() {}

/**
 * Strip whitespace or other characters from the beginning and end of a 
 * string.
 * @param {String} str The string that will be trimmed.
 * @param {String} chars Set what kind of chars that needs to be trimmed.
 * 
 * @return {String} The trimmed string.
 */
StringTrimmer.trim = function trim(str, chars = " \t\n\r\0\x0B") {
    return this.trimLeft(this.trimRight(str, chars), chars);
}

/**
 * Strip whitespace or other characters from the beginning of a string.
 * 
 * @param  {String}  str  The string that will be trimmed.
 * @param  {String}  chars  Set what kind of chars that needs to be trimmed.
 * 
 * @return {String} The trimmed string.
 */
StringTrimmer.trimLeft = function trim(str, chars = " \t\n\r\0\x0B") {
    chars = chars.split("");
    for (var i = 0; i < str.length; i++) {
        if (!chars.includes(str[i])) break;
    }
    return str.substring(i);
}

/**
 * Strip whitespace or other characters from the end of a string.
 * 
 * @param  {String}  str  The string that will be trimmed.
 * @param  {String}  chars  Set what kind of chars that needs to be trimmed.
 * 
 * @return {String} The trimmed string.
 */
StringTrimmer.trimRight = function trimRight(str, chars = " \t\n\r\0\x0B") {
    chars = chars.split("");
    for (var i = str.length - 1; i >= 0; i--) {
        if (!chars.includes(str[i])) break;
    }
    return str.substring(0, i + 1);
}

if (typeof window == 'object') {
    window.StringTrimmer = StringTrimmer;
    if (typeof define === 'function') {
        //AMD
        define((require, exports, module) => {
            module.exports = StringTrimmer;
        });
    }
} else if (typeof module === 'object' && module.exports) {
    //CommonJS
    module.exports = StringTrimmer;
}