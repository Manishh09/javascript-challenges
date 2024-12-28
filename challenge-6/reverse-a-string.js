// Reverse a string provides as input

function reverseString(string) {
    if(typeof string === 'string') {
        return string.split('').reverse().join('');
    }

    return "Provide a valid string";
}

function reverseStringWithoutInBuiltMethods(str) {

    // check input's type , as string

    if(typeof str === 'string' && str.length) {

        let tempStr = '';

        // iterate from last index of a string to first index

        for(let i = str.length -1; i>=0; i++) {
            tempStr += str[i];
        }

        return tempStr;
    }

    return 'Provide a valid string input'
}